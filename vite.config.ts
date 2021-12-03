import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // Vite启动后提示“Network: use `--host` to expose“ 通过ip访问
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://erpproxy.hapi123.net',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    // 配置别名 vue cli一样 以@引入文件
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
