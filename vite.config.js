import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // บังคับให้เริ่มที่ root เสมอ
  build: {
    outDir: 'dist', // ยืนยันว่าให้ไปที่โฟลเดอร์ dist
  }
})