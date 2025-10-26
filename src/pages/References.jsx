import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, Link, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { CITATIONS, citationKeys } from '../data/citations';

const References = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle scroll to citation when page loads with hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message && email.includes('@')) {
            setSubmitted(true);
            // reset form after submission success(simulate)
            setName(''); setEmail(''); setMessage('');
            setTimeout(() => setSubmitted(false), 5000);
            alert('Thank you for contacting us! We have received your message.');
        } else {
            alert('Please fill in all the information correctly.');
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <MainLayout>
            <Container maxWidth="lg">


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
                        Main References
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <Box
                        sx={{
                            p: 3,
                            bgcolor: 'white',
                            borderRadius: 2,
                            boxShadow: 3,
                            mb: 4,
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6
                            }
                        }}
                    >
                        <List>
                            {citationKeys.map((key) => {
                                const citation = CITATIONS[key];
                                return (
                                    <ListItem key={citation.id} id={`cite-${citation.id}`} sx={{ display: 'block', borderBottom: '1px solid #eee', py: 2 }}>
                                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                                            {citation.source}
                                        </Typography>
                                        <Link
                                            href={citation.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                ml: 0,
                                                mt: 1,
                                                display: 'inline-block',
                                                color: 'primary.main',
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            [View Source]
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </motion.div>


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mt: 5 }}>
                        Contact and Contributions
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            p: 3,
                            bgcolor: 'white',
                            borderRadius: 2,
                            boxShadow: 3,
                            maxWidth: 600,
                            mx: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6
                            }
                        }}
                    >
                        {submitted && (
                            <Typography color="success.main" variant="h6" align="center">
                                Thank you for contacting us! We have received your message.
                            </Typography>
                        )}
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Message Content"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" disabled={submitted}>
                            Send Message
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </MainLayout>
    );
};
export default References;