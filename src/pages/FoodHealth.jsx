import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { PAGE_CONTENT } from '../data/pageContent';

const FoodHealth = () => {
    const { title, body } = PAGE_CONTENT.FOOD_HEALTH;

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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Typography variant="h2" component="h1" gutterBottom align="center" color="primary" sx={{ fontWeight: 700 }}>
                        {title}
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <Grid container spacing={4}>

                        {/* Multimedia Column */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={fadeInUp}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        bgcolor: 'secondary.light',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <Typography variant="h6" color="primary" gutterBottom>Multimedia: Food Safety</Typography>



                                    <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%', mb: 2 }}>

                                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            src="https://www.youtube.com/embed/0J2Qv_72Xzo" title="What is food safety?"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen></iframe>
                                    </Box>

                                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                        This video explains the importance of quality control in global food supply chains and its impact on human health.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Main Content Column */}
                        <Grid item xs={12} md={8}>
                            <motion.div variants={fadeInUp}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    {body}
                                </Paper>
                            </motion.div>
                        </Grid>


                    </Grid>
                </motion.div>
            </Container>
        </MainLayout>
    );
};
export default FoodHealth;