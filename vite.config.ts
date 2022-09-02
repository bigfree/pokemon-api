import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslintPlugin({
            eslintOptions: {
                fix: true
            }
        }),
        react(),
        VitePluginFonts({
            custom: {
                families: [{
                    name: 'Courier Prime',
                    local: 'Courier Prime',
                    src: './src/assets/fonts/courier_prime/*.ttf'
                }]
            }
        })
    ],
    server: {
        port: 3000,
        host: true,
    }
})
