import Start from "./components/root-comp/root-comp.vue";
import Home from "./components/home-comp/home-comp.vue";
import About from "./components/about-comp/about-comp.vue";
import Cars from "./components/cars/cars-page/cars-page.vue";
import CarDetails from "./components/cars/car-details/car-details.vue";
import LoginPage from "./components/auth/login-page/login-page.vue";
import Reserve from "./components/reservations/addReservation-comp/addReservation-comp.vue"
import Reservations from "./components/reservations/reservations-page/reservations-page.vue"
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/',name: 'start', component: Start},
    {path: '/home',names: 'home', component: Home},
    {path: '/about',name: 'about', component: About},
    {path: '/cars/all',name: 'cars-page', component: Cars},
    {path: '/reservations',name: 'reservations-overview', component: Reservations},
    {path: '/cars/details/:id',name: 'car-details',component: CarDetails, props: true},
    {path: '/auth/login',name: 'login-page',component: LoginPage},
    {path: '/reservations/add/:carId/:carBrand/:carModel',name: 'add-reservation', component: Reserve, props: true},
    {path: '/reservations/all',name: 'reservations-page', component: Reservations}
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
});

export default router
