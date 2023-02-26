import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/home-comp/home-comp.vue'

const routes = [
    { path: '/',name: 'home', component: Home},
  ]

  export const router = createRouter({
    history : createWebHashHistory(),
    routes,
  });

const app = createApp(App)
app.use(router)
app.mount('#app')