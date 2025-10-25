import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import {
    Container, Paper, TextField, Button, List, ListItem, Typography, Box, CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// ----------------------------------------------------
// Dữ liệu và Tiền xử lý (Giả định Logic)
// ----------------------------------------------------

// Từ điển mã hóa: mô phỏng quá trình token hóa và vector hóa
const WORD_INDEX = {
    'chào': 1, 'bạn': 2, 'giá': 3, 'bao': 4, 'nhiêu': 5,
    'cảm': 6, 'ơn': 7, 'xin': 8, 'cám': 9,
};
const INTENT_CLASSES = ['chao_hoi', 'hoi_gia', 'cam_on', 'khác'];
const MAX_SEQUENCE_LENGTH = 10; // Độ dài tối đa của chuỗi input

// Hàm Tiền xử lý: chuyển câu thành mảng số (vector) cho mô hình
const preprocess = (text) => {
    if (!text || typeof text !== 'string') {
        return new Array(MAX_SEQUENCE_LENGTH).fill(0);
    }

    const words = text.toLowerCase().split(/\s+/);
    let sequence = words
        .map(word => WORD_INDEX[word] || 0) // Ánh xạ từ thành số
        .filter(val => val !== 0);

    // Đảm bảo có ít nhất một phần tử
    if (sequence.length === 0) {
        sequence = [0];
    }

    // Đệm (padding) chuỗi đầu vào
    while (sequence.length < MAX_SEQUENCE_LENGTH) {
        sequence.push(0);
    }
    return sequence.slice(0, MAX_SEQUENCE_LENGTH);
};

// ----------------------------------------------------
// Component chính React
// ----------------------------------------------------

const ClientChatbot = () => {
    const [model, setModel] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);

    // Cuộn xuống cuối tin nhắn
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // 1. Tải Mô hình (Chỉ chạy một lần khi component mount)
    useEffect(() => {
        const loadModel = async () => {
            try {
                // Tải mô hình từ thư mục public, chạy hoàn toàn client-side
                const loadedModel = await tf.loadLayersModel('/model/model.json');
                setModel(loadedModel);
                setLoading(false);
                setMessages([{ sender: 'bot', text: '🤖 Đã tải AI thành công! Bạn cần hỗ trợ gì?' }]);
            } catch (error) {
                console.error('Lỗi khi tải mô hình TF.js:', error);
                setLoading(false);
                // Fallback: Sử dụng mô hình giả lập khi không có file mô hình
                setModel('mock');
                setMessages([{
                    sender: 'bot',
                    text: '⚠️ Chế độ demo: Mô hình AI không có sẵn, sử dụng logic giả lập.'
                }]);
            }
        };
        loadModel();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Logic tạo phản hồi dựa trên Ý định (Intent)
    const getBotResponse = (intent) => {
        switch (intent) {
            case 'chao_hoi':
                return 'Xin chào! Tôi là AI chạy trên trình duyệt của bạn.';
            case 'hoi_gia':
                return 'Về giá, tôi cần bạn truy cập trang pricing để xem chi tiết.';
            case 'cam_on':
                return 'Bạn thật tử tế! Không có gì.';
            case 'khác':
            default:
                return 'Xin lỗi, tôi chỉ hiểu các chủ đề cơ bản (Chào hỏi, Giá).';
        }
    };

    // 2. Xử lý Gửi và Suy luận
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
                let predictedIntent = 'khác';

                if (lowerInput.includes('chào') || lowerInput.includes('xin chào')) {
                    predictedIntent = 'chao_hoi';
                } else if (lowerInput.includes('giá') || lowerInput.includes('bao nhiêu')) {
                    predictedIntent = 'hoi_gia';
                } else if (lowerInput.includes('cảm ơn') || lowerInput.includes('cám ơn')) {
                    predictedIntent = 'cam_on';
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

            // f. Tạo và Cập nhật phản hồi bot
            const botText = getBotResponse(predictedIntent);

            setTimeout(() => {
                const botMessage = { sender: 'bot', text: botText };
                setMessages((prev) => [...prev, botMessage]);
            }, 500);

        } catch (error) {
            console.error('Lỗi trong quá trình xử lý:', error);
            setTimeout(() => {
                const botMessage = {
                    sender: 'bot',
                    text: '❌ Lỗi xử lý: Vui lòng thử lại.'
                };
                setMessages((prev) => [...prev, botMessage]);
            }, 500);
        } finally {
            // g. Giải phóng bộ nhớ Tensor
            if (inputTensor) inputTensor.dispose();
            if (prediction) prediction.dispose();
        }
    };

    // 3. Giao diện (Material UI)
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                🤖 Chatbot Client-Side (TF.js)
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