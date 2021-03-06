import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import '@/assets/css/reset.css'

createApp(App)
  .use(router)
  .use(store)
  .use(vant)
  .mount('#app')

