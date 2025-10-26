import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'router-vendor': ['react-router-dom'],
          'i18n-vendor': ['react-i18next', 'i18next', 'i18next-browser-languagedetector']
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Tăng limit để tránh warning
    sourcemap: false, // Disable sourcemap cho production
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  server: {
    host: '0.0.0.0', // 👈 Quan trọng: mở cho mọi IP trong mạng LAN
    port: 5173,       // Hoặc port bạn muốn
    strictPort: true, // Dùng đúng port, không random
    cors: true        // Cho phép truy cập từ máy khác
  }
});
