import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@based": path.resolve(__dirname, "./src/based"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@query": path.resolve(__dirname, "./src/queries"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 3000
  }
})
