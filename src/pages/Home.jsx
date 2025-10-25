import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { PAGE_CONTENT } from '../data/pageContent';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const Home = () => {
    const { title, tagline, body } = PAGE_CONTENT.HOME;

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <MainLayout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* Hero Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h2" component="h1" color="primary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" sx={{ mb: 4 }}>
                            {tagline}
                        </Typography>
                    </Box>
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
                                    {/* <Box display="flex" alignItems="center" mb={2}>
                                        <VideoLibraryIcon color="primary" sx={{ mr: 1 }} />
                                        <Typography variant="h6">Multimedia:</Typography>
                                    </Box> */}


                                    {/* Thẻ bọc responsive cho iframe */}
                                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>

                                        <video controls width="100%">
                                            <source src="/AI_s_Role_in_Global_Health.mp4" type="video/mp4" />
                                        </video>

                                    </Box>

                                    <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                                        This video illustrates how global healthcare systems are interconnected, emphasizing Global Interdependence.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Main Content */}
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

export default Home;