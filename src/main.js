import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/home-comp/home-comp.vue'
import Cars from './components/cars-overview/cars-overview.vue'
import About from './components/about-comp/about-comp.vue'
import Reservations from './components/reservations-overview/reservations-overview.vue'

const routes = [
    { path: '/',name: 'home', component: Home},
    {path: '/about',name: 'about', component: About},
    { path: '/cars',name: 'cars-overview', component: Cars},
    {path: '/reservations',name: 'reservations-overview', component: Reservations}
  ]

  export const router = createRouter({
    history : createWebHashHistory(),
    routes,
  });


const app = createApp(App)
app.use(router)
app.mount('#app')