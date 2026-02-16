import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// Bootstrap CSS + Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS (includes Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createApp(App).use(router).mount('#app')
