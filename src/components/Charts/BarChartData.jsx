import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {
    Typography,
    Box
} from '@mui/material';

import CitationLink from '../UI/CitationLink';
import { GLOBAL_HEALTH_DATA } from '../../data/statistics';

const BarChartData = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant="subtitle1" align="center" gutterBottom>
                AI Healthcare Investment (Billion USD) vs. Early Diagnosis Rate (%) <CitationLink citationKey="CITE_AI_02" />
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={GLOBAL_HEALTH_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#00796B" />
                    <YAxis yAxisId="right" orientation="right" stroke="#FFB300" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="Investment" fill="#00796B" name="AI Investment (Billion USD)" />
                    <Bar yAxisId="right" dataKey="Diagnosis" fill="#FFB300" name="Early Diagnosis Rate (%)" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default BarChartData;