import { createApp } from 'vue'
import App from './App.vue'
import { unhead } from './plugins/unhead'
import { router } from './plugins/vue-router'
import './assets/styles/main.css'

const app = createApp(App)

app
  .use(router)
  .use(unhead)

app.mount('#app')
