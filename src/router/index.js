import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Watsapfloat from "../components/whatsapp.vue";
import Whatsapp from "../components/whatsapp.vue";
import InventoryView from "../components/inventoryView.vue";
import AboutView from "../components/AboutView.vue";
// import { C } from "vue-router/dist/router-CWoNjPRp.mjs";
import ReachUs from "../components/ReachUs.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'Home', component: Home
    },
    { path: '/navbar', name: 'navbar', component: Navbar },
    // { path: '*', redirect: '/' },
    { path: '/footer', name: 'footer', component: Footer },
    { path: '/whatsapp', name: 'whatsapp', component: Whatsapp },
    { path: '/inventory', name: 'inventory', component: InventoryView },
    { path: '/about', name: 'about', component: AboutView } ,
    { path:'/reachus', name:'reachus', component: ReachUs }
  ],
});
export default router;