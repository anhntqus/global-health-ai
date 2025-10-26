import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { PAGE_CONTENT } from '../data/pageContent';
import CitationLink from '../components/UI/CitationLink';

const AIApplications = () => {
    const { title, body } = PAGE_CONTENT.AI_APPLICATIONS;

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
                        {title}
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <Grid container spacing={4}>

                        {/* Multimedia */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={fadeInUp}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        bgcolor: 'grey.50',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >

                                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>

                                        <video controls width="100%">
                                            <source src={`${import.meta.env.BASE_URL}AI_Applications_in_Global_Health_Video.mp4`} type="video/mp4" />
                                        </video>

                                    </Box>

                                    <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                                        Explore how Artificial Intelligence (AI) is revolutionizing Global Health. From predicting disease outbreaks and accelerating drug discovery to improving diagnosis in underserved communities and optimizing healthcare logistics, see the most powerful real-world applications of AI tackling the world's biggest health challenges.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Main Content */}
                        <Grid item xs={12} md={8}>
                            <motion.div variants={fadeInUp}>
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
                                    <Box>
                                        {body}
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Case Study Card */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={fadeInUp}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>Case Study: AI in Malaria Diagnosis</Typography>
                                        <Typography variant="body2">
                                            An AI algorithm can analyze blood images faster than humans, helping diagnose malaria in areas lacking specialist doctors <CitationLink citationKey="CITE_TREATMENT_05" />.
                                        </Typography>
                                        <Box component="img" src={`${import.meta.env.BASE_URL}malaria-image.jpg`} alt="AI Diagnosis" sx={{ width: '100%', mt: 2 }} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>

                    </Grid>
                </motion.div>
            </Container>
        </MainLayout>
    );
};
export default AIApplications;