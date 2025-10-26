import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import {
    Container, Paper, TextField, Button, List, ListItem, Typography, Box, CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Data and Preprocessing (Mock Logic)
const WORD_INDEX = {
    'hello': 1, 'price': 2, 'thank you': 3, 'sorry': 4,
    'cảm': 6, 'ơn': 7, 'xin': 8, 'cám': 9,
};
const INTENT_CLASSES = ['chao_hoi', 'hoi_gia', 'cam_on', 'khác'];
const MAX_SEQUENCE_LENGTH = 10; // Độ dài tối đa của chuỗi input

// Preprocessing Function: convert text to array of numbers (vector) for model
const preprocess = (text) => {
    if (!text || typeof text !== 'string') {
        return new Array(MAX_SEQUENCE_LENGTH).fill(0);
    }

    const words = text.toLowerCase().split(/\s+/);
    let sequence = words
        .map(word => WORD_INDEX[word] || 0) // Ánh xạ từ thành số
        .filter(val => val !== 0);

    // Ensure at least one element
    if (sequence.length === 0) {
        sequence = [0];
    }

    // Pad input string
    while (sequence.length < MAX_SEQUENCE_LENGTH) {
        sequence.push(0);
    }
    return sequence.slice(0, MAX_SEQUENCE_LENGTH);
};

// ----------------------------------------------------
// Main React Component
// ----------------------------------------------------

const ClientChatbot = () => {
    const [model, setModel] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);

    // Scroll to bottom of messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // 1. Load Model (Only run once when component mounts)
    useEffect(() => {
        const loadModel = async () => {
            try {
                // Load model from public directory, run completely client-side
                const loadedModel = await tf.loadLayersModel('/model/model.json');
                setModel(loadedModel);
                setLoading(false);
                setMessages([{ sender: 'bot', text: 'AI model loaded successfully! What do you need help with?' }]);
            } catch (error) {
                console.error('Error loading TF.js model:', error);
                setLoading(false);
                // Fallback: Sử dụng mô hình giả lập khi không có file mô hình
                setModel('mock');
                setMessages([{
                    sender: 'bot',
                    text: 'Demo mode: AI model not available, using mock logic.'
                }]);
            }
        };
        loadModel();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Logic to create response based on Intent
    const getBotResponse = (intent) => {
        switch (intent) {
            case 'chao_hoi':
                return 'Hello! I am an AI running on your browser.';
            case 'hoi_gia':
                return 'About price, you need to visit the pricing page to see details.';
            case 'cam_on':
                return 'You are very kind! Nothing to say.';
            case 'khác':
            default:
                return 'Sorry, I only understand basic topics (Hello, Price).';
        }
    };

    // 2. Process Send and Inference
    const handleSend = async () => {
        if (!input.trim() || !model) return;

        const userMessage = { sender: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        const currentInput = input.trim();
        setInput('');

        let inputTensor = null;
        let prediction = null;

        try {
            // a. Tiền xử lý
            const processedInput = preprocess(currentInput);

            // b. Xử lý mô hình thật hoặc giả lập
            if (model === 'mock') {
                // Logic giả lập dựa trên từ khóa
                const lowerInput = currentInput.toLowerCase();
                let predictedIntent = 'other';

                if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                    predictedIntent = 'greet';
                } else if (lowerInput.includes('price') || lowerInput.includes('price')) {
                    predictedIntent = 'ask_price';
                } else if (lowerInput.includes('thank you') || lowerInput.includes('thank you')) {
                    predictedIntent = 'thank_you';
                }

                const botText = getBotResponse(predictedIntent);
                setTimeout(() => {
                    const botMessage = { sender: 'bot', text: botText };
                    setMessages((prev) => [...prev, botMessage]);
                }, 500);
                return;
            }

            // c. Tạo Tensor và Chạy Mô hình thật (Inference)
            inputTensor = tf.tensor2d([processedInput]);
            prediction = model.predict(inputTensor);

            // d. Lấy kết quả
            const values = prediction.dataSync();
            const intentIndex = tf.argMax(values).dataSync()[0];

            // e. Validation kết quả
            const predictedIntent = INTENT_CLASSES[intentIndex] || 'khác';

            // f. Create and Update bot response
            const botText = getBotResponse(predictedIntent);

            setTimeout(() => {
                const botMessage = { sender: 'bot', text: botText };
                setMessages((prev) => [...prev, botMessage]);
            }, 500);

        } catch (error) {
            console.error('Error processing:', error);
            setTimeout(() => {
                const botMessage = {
                    sender: 'bot',
                    text: 'Error processing: Please try again.'
                };
                setMessages((prev) => [...prev, botMessage]);
            }, 500);
        } finally {
            // g. Release Tensor memory
            if (inputTensor) inputTensor.dispose();
            if (prediction) prediction.dispose();
        }
    };

    // 3. Interface
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Chatbot Client-Side (TF.js)
            </Typography>
            <Paper elevation={3} sx={{ height: 500, display: 'flex', flexDirection: 'column' }}>
                {loading ? (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                        <Typography sx={{ ml: 2 }}>Đang tải mô hình AI từ trình duyệt...</Typography>
                    </Box>
                ) : (
                    <>
                        <List sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                            {messages.map((msg, index) => (
                                <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                                    <Paper
                                        variant="outlined"
                                        sx={{
                                            p: 1.5,
                                            maxWidth: '80%',
                                            backgroundColor: msg.sender === 'user' ? '#e3f2fd' : '#f0f0f0',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        <Typography variant="body2">{msg.text}</Typography>
                                    </Paper>
                                </ListItem>
                            ))}
                            <div ref={messagesEndRef} />
                        </List>
                        <Box sx={{ p: 2, display: 'flex', borderTop: '1px solid #ccc' }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Nhập tin nhắn (Ví dụ: Chào bạn, Giá bao nhiêu?)..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSend();
                                    }
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon />}
                                onClick={handleSend}
                                disabled={!model}
                                sx={{ ml: 1 }}
                            >
                                Gửi
                            </Button>
                        </Box>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default ClientChatbot;