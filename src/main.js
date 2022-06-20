import { createApp } from 'vue'
import pinia from './plugins/pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})()

loadFonts()

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
