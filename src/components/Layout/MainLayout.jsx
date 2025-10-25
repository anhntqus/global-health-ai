import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <Header />
            <Box component="main" sx={{
                flexGrow: 1,
                py: 4,
                bgcolor: 'background.default',
                paddingTop: '80px', // add padding to avoid being covered by header
                paddingBottom: '80px' // add padding to avoid being covered by footer
            }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;