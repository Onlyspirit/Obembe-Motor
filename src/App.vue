<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppFloat from './components/whatsapp.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view />   <!-- This shows the current page content (Home, Inventory, etc.) -->
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<style>
/* Optional global styles */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* background-color: #f8f9fa; */
}
</style>