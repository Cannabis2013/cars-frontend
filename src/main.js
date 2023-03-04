import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/home-comp/home-comp.vue'
import Cars from './components/cars-page/cars-page.vue'
import About from './components/about-comp/about-comp.vue'
import Reservations from './components/reservations-overview/reservations-overview.vue'
import CarDetails from './components/car-details/car-details.vue'
import './assets/css/container-styles.scss'
import './assets/css/utils.scss'

const routes = [
    { path: '/',name: 'home', component: Home},
    {path: '/about',name: 'about', component: About},
    { path: '/cars/all',name: 'cars-listview', component: Cars},
    {path: '/reservations',name: 'reservations-overview', component: Reservations},
    {path: '/cars/details/:id',name: 'car-details',component: CarDetails, props: true}
  ]

  const router = createRouter({
    history : createWebHashHistory(),
    routes,
  });


const app = createApp(App)
app.use(router)
app.mount('#app')