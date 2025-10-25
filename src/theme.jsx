import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00796B', // Xanh Teal đậm (Màu Y tế, công nghệ)
        },
        secondary: {
            main: '#FFB300', // Vàng ấm (Màu cảnh báo, nổi bật)
        },
        background: {
            default: '#f5f5f5', // Màu nền nhạt
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.1rem',
            lineHeight: 1.6,
        },
    },
});

export default theme;