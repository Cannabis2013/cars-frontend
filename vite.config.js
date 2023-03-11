import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  devServer: {
    open: process.platform === 'linux',
    host: '0.0.0.0',
    strictPort: true,
    port: 8090,
    https: false,
  }
})
