import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vant from 'vant'
import router from './router'
import { createMetaManager } from 'vue-meta'
import VuePageStack from 'vue-page-stack'
import 'normalize.css'

const app = createApp(App)
app.use(vant)
app.use(VuePageStack, { router })
app.use(router)
app.use(createMetaManager())
app.mount('#app')
