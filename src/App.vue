<template>
  <v-app id="inspire">
    <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  data: () => ({
  })
}
</script>
<style scoped>
  #inspire {
    background-color:#F5F5F5;
  }
</style>
