import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/home-comp/home-comp.vue'
import About from './components/about-comp/about-comp.vue'

const routes = [
    { path: '/',name: 'home', component: Home},
    {path: '/about',name: 'about', component: About}
  ]

  export const router = createRouter({
    history : createWebHashHistory(),
    routes,
  });

const app = createApp(App)
app.use(router)
app.mount('#app')