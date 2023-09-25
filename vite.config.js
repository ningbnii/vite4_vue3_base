import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.staticfile.org/vue/3.3.4/vue.global.prod.js',
        },
        {
          name: 'vant',
          var: 'vant',
          path: 'https://cdn.staticfile.org/vant/4.6.8/vant.min.js',
          css: 'https://cdn.staticfile.org/vant/4.6.8/index.min.css',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.staticfile.org/vue-router/4.2.4/vue-router.global.prod.js',
        },
        {
          name: 'vue-meta',
          var: 'VueMeta',
          path: 'https://cdn.staticfile.org/vue-meta/3.0.0-alpha.10/vue-meta.global.min.js',
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'https://cdn.staticfile.org/axios/1.5.0/axios.min.js',
        },
        {
          name: 'qs',
          var: 'qs',
          path: 'https://cdn.staticfile.org/qs/6.11.2/qs.min.js',
        },
      ],
    }),
  ],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
})
