import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Watsapfloat from "../components/Whatsapp.vue";
import Whatsapp from "../components/Whatsapp.vue";
import InventoryView from "../view/inventoryView.vue";
import AboutView from "../view/AboutView.vue";
// import { C } from "vue-router/dist/router-CWoNjPRp.mjs";
import ReachUs from "../components/ReachUs.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'Home', component: Home
    },
    { path: '/Navbar', name: 'Navbar', component: Navbar },
    // { path: '*', redirect: '/' },
    { path: '/Footer', name: 'Footer', component: Footer },
    { path: '/Whatsapp', name: 'Whatsapp', component: Whatsapp },
    { path: '/inventory', name: 'inventory', component: InventoryView },
    { path: '/about', name: 'about', component: AboutView } ,
    { path:'/Reachus', name:'Reachus', component: ReachUs }
  ],
});
export default router;