import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './index.css'

library.add(fas)
library.add(far)
const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
