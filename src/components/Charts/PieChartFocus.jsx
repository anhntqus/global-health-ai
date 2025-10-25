import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';
import CitationLink from '../../components/UI/CitationLink';
import { AI_FOCUS_DISTRIBUTION } from '../../data/statistics';

const PieChartFocus = () => {
    return (
        <Box sx={{ height: 400, width: '100%', mt: 4 }}>
            <Typography variant="subtitle1" align="center" gutterBottom>
                AI Healthcare Investment Distribution by Sector (Hypothetical, Million USD) <CitationLink citationKey="CITE_AI_02" />
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                    <Pie
                        data={AI_FOCUS_DISTRIBUTION}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    >
                        {AI_FOCUS_DISTRIBUTION.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default PieChartFocus;