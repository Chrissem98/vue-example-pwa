import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-example-pwa/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'My Vue App',
        short_name: 'VueApp',
        description: 'My Awesome App description',
        start_url: "/vue-example-pwa/?source=pwa",
        scope: "/vue-example-pwa/",
        display: "fullscrene",
        orientation: "portrait",
        theme_color: '#121212',
        categories: [
          "test",
        ],
        icons: [
          {
            src: 'vue-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'vue-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            "name": "Home",
            "short_name": "Home",
            "description": "My Home Page",
            "url": "/vue-example-pwa/",
            "icons": [
              {
                "src": "home-192x192.png",
                "sizes": "192x192"
              }
            ]
          },
          {
            "name": "About",
            "short_name": "About",
            "description": "My About Page",
            "url": "/vue-example-pwa/about",
            "icons": [
              {
                "src": "about-192x192.png",
                "sizes": "192x192"
              }
            ]
          },
        ],
        screenshots: [
          {
            "src": "vue-home.png",
            "sizes": "400x865",
            "type": "image/png"
          },
          {
            "src": "vue-about.png",
            "sizes": "400x865",
            "type": "image/png"
          },
        ],
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
