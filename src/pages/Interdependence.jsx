// src/pages/Interdependence.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { PAGE_CONTENT } from '../data/pageContent';

const Interdependence = () => {
    const { title, body } = PAGE_CONTENT.INTERDEPENDENCE;

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <MainLayout>
            <Container maxWidth="md">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
                        {title}
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
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6
                            }
                        }}
                    >
                        {body}
                    </Box>
                </motion.div>
            </Container>
        </MainLayout>
    );
};
export default Interdependence;