import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import SubMenu from './components/sub-menu.vue'

createApp(App).component('SubMenu', SubMenu).use(router).mount('#app')
