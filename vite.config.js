import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/TodoList-using-Redux',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['todoIcon.svg'],
      scope: "/TodoList-using-Redux/",
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
            src: 'check-list192.png',
            sizes: '192x192',
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
