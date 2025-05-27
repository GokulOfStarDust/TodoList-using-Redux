import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['todoIcon.svg'],
      manifest: {
        name: "TaskTracker - To-Do List",
        short_name: "TaskTracker",
        description: "Stay productive with TaskTracker, your minimalist to-do list app.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4f46e5",
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        },
        icons: [
          {
            src: 'check-list128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'check-list.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ]
})
