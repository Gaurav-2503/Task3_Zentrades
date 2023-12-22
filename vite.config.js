import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Task3_Zentrades/",
  build: {
    outDir: "dist", // Change this to your desired output directory
  },
});
