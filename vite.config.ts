import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    /* Build should comment server */
    server: {
        host: '127.0.0.1',
        port: 8080,
        // proxy: {
        //     '/api': {
        //         target: 'https://api-training.hrm.div4.pgtest.co',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
        //         // /api/v1
        //         secure: false,
        //     },
        // },
    },
});
