import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Chip, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import { PAGE_CONTENT } from '../data/pageContent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import CitationLink from '../components/UI/CitationLink';

const FutureTrends = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Future Technologies
    const futureTechnologies = [
        {
            title: "Quantum Computing in Healthcare",
            description: "Quantum computers will revolutionize drug discovery by simulating molecular interactions at unprecedented speeds, potentially reducing drug development time from years to months.",
            icon: <ScienceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            timeline: "2025-2027",
            impact: "High"
        },
        {
            title: "Brain-Computer Interfaces",
            description: "Direct neural interfaces will enable paralyzed patients to control prosthetics and communicate through thought, transforming rehabilitation medicine.",
            icon: <PsychologyIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
            timeline: "2026-2030",
            impact: "Revolutionary"
        },
        {
            title: "Digital Twins for Patients",
            description: "Virtual replicas of individual patients will allow for personalized treatment simulation and outcome prediction before actual interventions.",
            icon: <BiotechIcon sx={{ fontSize: 40, color: 'success.main' }} />,
            timeline: "2025-2028",
            impact: "High"
        },
        {
            title: "Edge AI in Medical Devices",
            description: "AI processing directly on medical devices will enable real-time diagnostics and treatment adjustments without cloud dependency.",
            icon: <CloudIcon sx={{ fontSize: 40, color: 'info.main' }} />,
            timeline: "2024-2026",
            impact: "Medium"
        }
    ];

    // Timeline Data
    const timelineData = [
        {
            year: "2024",
            title: "AI-Powered Drug Discovery Acceleration",
            description: "AI reduces drug development time by 40% through automated compound screening and molecular design."
        },
        {
            year: "2025",
            title: "Personalized Medicine at Scale",
            description: "AI enables truly personalized treatment plans based on individual genetic profiles and lifestyle factors."
        },
        {
            year: "2026",
            title: "Autonomous Surgical Systems",
            description: "AI-assisted robotic surgery becomes standard practice with 99.9% precision rates."
        },
        {
            year: "2027",
            title: "Predictive Health Analytics",
            description: "AI predicts health issues 5-10 years in advance, enabling preventive interventions."
        },
        {
            year: "2028",
            title: "Global Health AI Network",
            description: "Worldwide AI network enables real-time disease surveillance and rapid response coordination."
        },
        {
            year: "2030",
            title: "AI-Human Medical Collaboration",
            description: "Seamless integration of AI and human expertise in all aspects of healthcare delivery."
        }
    ];

    // Get Impact Color
    const getImpactColor = (impact) => {
        switch (impact) {
            case 'Revolutionary': return 'error';
            case 'High': return 'warning';
            case 'Medium': return 'info';
            default: return 'default';
        }
    };

    // Main Layout
    return (
        <MainLayout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <Typography variant="h2" component="h1" gutterBottom align="center" color="primary" sx={{ mb: 2 }}>
                        Future Trends in AI Healthcare
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
                        Exploring the next frontier of artificial intelligence in global health
                    </Typography>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    {PAGE_CONTENT.FUTURE_TRENDS?.body}
                </motion.div>

                {/* Future Technologies Grid */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerChildren}
                    transition={{ delay: 0.4 }}
                >
                    <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                        Emerging Technologies
                    </Typography>

                    <Grid container spacing={3} sx={{ mb: 6 }}>
                        {futureTechnologies.map((tech, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                boxShadow: 6,
                                                transform: 'translateY(-4px)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                {tech.icon}
                                                <Box sx={{ ml: 2, flexGrow: 1 }}>
                                                    <Typography variant="h6" component="h3" gutterBottom>
                                                        {tech.title}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                                        <Chip
                                                            label={tech.timeline}
                                                            size="small"
                                                            color="primary"
                                                            variant="outlined"
                                                        />
                                                        <Chip
                                                            label={tech.impact}
                                                            size="small"
                                                            color={getImpactColor(tech.impact)}
                                                        />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary">
                                                {tech.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                        AI Healthcare Timeline
                    </Typography>

                    <Stepper orientation="vertical" sx={{ maxWidth: 600, mx: 'auto' }}>
                        {timelineData.map((item, index) => (
                            <Step key={index} active={true}>
                                <StepLabel>
                                    <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                        {item.year}
                                    </Typography>
                                </StepLabel>
                                <StepContent>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        <Card sx={{ maxWidth: 500, mb: 2, mt: 1 }}>
                                            <CardContent>
                                                <Typography variant="h6" component="h3" gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </motion.div>

                {/* Key Predictions */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    transition={{ delay: 0.8 }}
                >
                    <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                        Key Predictions for 2030
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ textAlign: 'center', p: 3 }}>
                                <TrendingUpIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                                <Typography variant="h5" gutterBottom>
                                    90% Reduction
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    In diagnostic errors through AI-powered medical imaging and analysis
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ textAlign: 'center', p: 3 }}>
                                <ScienceIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h5" gutterBottom>
                                    50% Faster
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Drug development timelines through AI-accelerated discovery and testing
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ textAlign: 'center', p: 3 }}>
                                <SecurityIcon sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
                                <Typography variant="h5" gutterBottom>
                                    99.9% Accuracy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    In pandemic prediction and early warning systems
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </MainLayout>
    );
};

export default FutureTrends;