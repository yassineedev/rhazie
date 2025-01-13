<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
<style scoped>

</style>
