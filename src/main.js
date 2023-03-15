import App from './App.vue'
import {createApp} from 'vue'
import './assets/css/container-styles.scss'
import './assets/css/utils.scss'
import router from "./routing.js";


const app = createApp(App)
app.use(router)
app.mount('#app')