import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        replace({
            'process.env.VITE_REACT_APP_HOST_ENV': JSON.stringify(process.env.VITE_REACT_APP_HOST_ENV),
        }),
    ],
    server: {
        host: '127.0.0.1',
        port: 8080,
    },
    // define: {
    //     'process.env.REACT_APP_HOST_ENV': JSON.stringify(process.env.REACT_APP_HOST_ENV),
    // },
});
