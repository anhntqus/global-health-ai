import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.dark',
            color: 'white',
            py: 3,
            mt: 'auto',
            position: 'sticky',
            bottom: 0,
            zIndex: 1000,
            width: '100%'
        }}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                    © {new Date().getFullYear()} Global Health & AI Project.
                    {' Made with ❤️ by '}
                    <Link color="inherit" href="https://anhntqus.github.io/MyCV/" target="_blank" rel="noopener">
                        <strong>Anh Nguyen</strong>
                    </Link>
                </Typography>
                <Typography variant="body2" align="center">
                    Developed with React, Vite, and Material UI. | <Link href="/references" color="inherit" sx={{ textDecoration: 'underline' }}>References</Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;