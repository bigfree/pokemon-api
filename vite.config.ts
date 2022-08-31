import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslintPlugin({
            eslintOptions: {
                fix: true
            }
        }),
        react(),
    ],
    server: {
        port: 3000,
        host: true,
    }
})
