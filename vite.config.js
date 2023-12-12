import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer'
// import externalGlobals from 'rollup-plugin-external-globals'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 解释一下visualizer插件，这个插件可以将打包后的文件以可视化的方式展示出来，方便我们分析
    visualizer({ open: true }),
    createHtmlPlugin({
      minify: true,
    }),
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
        // swiper
        {
          name: 'swiper',
          var: 'Swiper',
          path: 'https://cdn.staticfile.org/Swiper/11.0.5/swiper-bundle.min.js',
          css: 'https://cdn.staticfile.org/Swiper/11.0.5/swiper-bundle.min.css',
        },
      ],
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      // 告诉打包工具，在external配置的包，都是外部引入的，不要打包到代码中
      external: ['vue', 'vant', 'vue-router', 'vue-meta', 'axios', 'qs', 'swiper'],
      plugins: [
        // 解释一下externalGlobals插件，这个插件可以将external配置的包，以全局变量的方式引入，方便我们在代码中使用
        // externalGlobals({
        //   vue: 'Vue',
        //   vant: 'vant',
        //   'vue-router': 'VueRouter',
        //   'vue-meta': 'VueMeta',
        //   axios: 'axios',
        //   qs: 'qs',
        //   swiper: 'Swiper',
        // }),
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz',
          deleteOriginFile: false, // whether delete origin file
        }),
      ],
      output: {
        // esbuild 去掉 console.log
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            // 让第三方模块单独打包
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js', // 代码分割后的文件名
        entryFileNames: 'assets/js/[name]-[hash].js', // 入口文件的文件名
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 静态资源的文件名,字体，图片等
      },
    },
  },
})
