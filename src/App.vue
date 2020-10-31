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
    // drawer: null,
    // items: [
    //   { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
    //   { title: 'About', icon: 'mdi-help-box', to: '/about' }
    // ]
  })
}
</script>
