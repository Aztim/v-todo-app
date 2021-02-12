<template>
  <v-app id="inspire">
    <Navbar />
      <v-main>
        <router-view></router-view>
        <Snackbar />
      </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navigation/Navbar'
import Snackbar from './components/Shared/Snackbar'

export default {
  components: { Navbar, Snackbar },
  data: () => ({
  })
}
</script>
<style scoped>
  #inspire {
    background-color:#F5F5F5;
  }
</style>
