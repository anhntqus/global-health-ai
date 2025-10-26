import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Data Hub', path: '/data-hub' },
    { name: 'AI Applications', path: '/ai-applications' },
    { name: 'Interdependence', path: '/interdependence' },
    { name: 'Ethics & Security', path: '/ethics-security' },
    { name: 'Food & Health', path: '/food-health' },
    { name: 'Future Trends', path: '/future-trends' },
    { name: 'AI Assistant', path: '/assistant' },
    { name: 'References', path: '/references' },
];

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem button key={item.name} component={NavLink} to={item.path}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                top: 0,
                left: 0,
                right: 0
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/"
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                >
                    Global Health & AI Project
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                component={NavLink}
                                to={item.path}
                                sx={{
                                    color: 'white',
                                    mx: 0.5,
                                    // set active style
                                    '&.active': {
                                        fontWeight: 'bold',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    }
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;