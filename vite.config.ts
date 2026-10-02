import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/nai2/',
    plugins: [react()],
    server: {
        host: true,
        port: 5555,
    },
    define: {
        __DIY__: false,
    },
});
