import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import MainLayout from '../components/Layout/MainLayout';
import BarChartData from '../components/Charts/BarChartData';
import PieChartFocus from '../components/Charts/PieChartFocus';
import CitationLink from '../components/UI/CitationLink';

const DataHub = () => {
    return (
        <MainLayout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center" color="primary" sx={{ fontWeight: 700 }}>
                    Global Health & AI Data Visualization
                </Typography>

                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="body1" paragraph>
                        This page presents important statistical data, visualized through interactive charts, to highlight **investment** trends and **effectiveness** of Artificial Intelligence (AI) applications in global health. Although the data used here is **hypothetical** for educational and illustrative purposes, it reflects real trends in the rapid growth of digital health technology <CitationLink citationKey="CITE_AI_02" />. Analyzing this data is key to shaping health policies and international resource allocation decisions.
                    </Typography>

                    <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                        AI Investment Trends and Effectiveness Analysis
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The chart below illustrates the correlation between total global investment in AI healthcare technology and early diagnosis rates of complex diseases (e.g., cancer) over the years. The increase in investment (represented by Teal Blue color) shows the growing acceptance of this technology in the market. More importantly, the early diagnosis rate (Yellow color) also shows significant improvement, implying that investments are bringing clear effectiveness in improving care quality. This data emphasizes the importance of maintaining and enhancing funding for AI research and deployment on a global scale <CitationLink citationKey="CITE_TREATMENT_05" />.
                    </Typography>

                    {/* Chart 1: BAR CHART */}
                    <BarChartData />

                    <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                        AI Investment Capital Allocation by Sector
                    </Typography>
                    <Typography variant="body1" paragraph>
                        To better understand how AI capital is being used, the pie chart below analyzes investment concentration across different sectors. Clearly, Medical Imaging and Clinical Analysis remain the main focus, due to AI's ability to deliver immediate effectiveness in time savings and increased accuracy. However, other sectors such as Drug Development and Preventive Healthcare are also receiving increasing attention, reflecting a trend toward proactive and long-term healthcare solutions.
                    </Typography>

                    {/* Chart 2: PIE CHART */}
                    <PieChartFocus />

                    <Typography variant="body1" paragraph sx={{ mt: 4 }}>
                        Tracking these trends is crucial to ensure global resources are allocated most effectively, especially toward sustainable health development goals. Data transparency, even with hypothetical data, is part of the academic and professional responsibility of this project.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
                        Please refer to the References page for details about the citations.
                    </Typography>
                </Paper>
            </Container>
        </MainLayout>
    );
};
export default DataHub;