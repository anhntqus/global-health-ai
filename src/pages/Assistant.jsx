import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
// Environment variables
const HF_TOKEN = import.meta.env.VITE_HF_TOKEN || "BACKUP_HUGGING_FACE_TOKEN";
const HF_MODEL_URL = import.meta.env.VITE_HF_MODEL_URL || "https://api-inference.huggingface.co/models/distilgpt2";

const Assistant = () => {
    const [messages, setMessages] = useState([{ sender: 'bot', text: "Hello! I'm an AI assistant focused on Global Health topics. Feel free to ask me anything." }]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        const userPrompt = input.trim();
        if (userPrompt === '' || loading) return;

        const newUserMessage = { sender: 'user', text: userPrompt };
        setMessages((prev) => [...prev, newUserMessage]);
        setInput('');
        setLoading(true);

        // Kiểm tra token trước khi gọi API
        if (!HF_TOKEN) {
            setMessages((prev) => [...prev, {
                sender: 'bot',
                text: "⚠️ Error: Please configure VITE_HF_TOKEN in .env file"
            }]);
            setLoading(false);
            return;
        }

        try {
            // Gọi API Hugging Face với model ổn định
            const response = await fetch(
                HF_MODEL_URL,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${HF_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        inputs: userPrompt,
                        parameters: {
                            max_new_tokens: 150,
                            temperature: 0.7
                        }
                    }),
                }
            );

            const result = await response.json();
            let botResponseText = "Sorry, an unknown error occurred.";

            if (response.ok) {
                // Hugging Face Inference API response structure (Text Generation)
                const generatedText = result[0]?.generated_text;

                if (generatedText) {
                    // Remove repeated prompt in response (common with LLMs)
                    botResponseText = generatedText.replace(userPrompt, '').trim();
                }
            } else {
                // Handle API errors (e.g., invalid Token, model not loaded)
                console.error("Hugging Face API Error:", result.error || "Unknown API error");
                botResponseText = `AI Connection Error: ${result.error || 'Please check Token and Model URL.'}`;
            }

            // Cập nhật trạng thái tin nhắn
            setMessages((prev) => [...prev, { sender: 'bot', text: botResponseText }]);

        } catch (error) {
            console.error('Fetch error:', error);
            setMessages((prev) => [...prev, { sender: 'bot', text: "Network connection error. Please check your internet connection." }]);
        } finally {
            setLoading(false);
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <MainLayout>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
                        AI Assistant
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom align="center" color="text.secondary">
                        This is a prototype of an AI assistant. It is not fully functional and is under development.
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            height: 500,
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 6
                            }
                        }}
                    >
                        {/* Message Area */}
                        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                            {messages.map((msg, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    mb: 1
                                }}>
                                    <Box sx={{
                                        bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.300',
                                        color: msg.sender === 'user' ? 'white' : 'black',
                                        p: 1.5,
                                        borderRadius: 2,
                                        maxWidth: '80%',
                                    }}>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{msg.text}</Typography>
                                    </Box>
                                </Box>
                            ))}
                            {loading && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
                                    <CircularProgress size={20} sx={{ p: 1 }} />
                                </Box>
                            )}
                            <div ref={messagesEndRef} />
                        </Box>

                        {/* Input Area */}
                        <Box sx={{ p: 2, borderTop: '1px solid #ccc', display: 'flex' }}>
                            {/* Text Field */}
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                placeholder="Ask about AI, Global Health..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                disabled={loading}
                            />
                            {/* Send Button */}
                            <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 1 }} disabled={loading}>
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Send'}
                            </Button>
                        </Box>

                    </Paper>
                </motion.div>
            </Container>
        </MainLayout>
    );
};
export default Assistant;