<template>
<div>
  <NavSideBar
    :is-drawer = drawer
    :items = items
  />
  <v-app-bar
    app
    color="primary"
    dark
    prominent
    src="https://images.wallpaperscraft.com/image/lawn_forest_mountains_144578_2560x1080.jpg"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="ml-4">
        {{ appTitle }}
        <LiveDateTime />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <Search />
    </v-app-bar>
  </div>
</template>

<script>
import NavSideBar from './NavSideBar'
import Search from '../Tools/Search'
import LiveDateTime from '../Tools/LiveDateTime'
import { mapGetters } from 'vuex'

export default {
  components: { NavSideBar, Search, LiveDateTime },
  data: () => ({
    drawer: false,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' }
    ]
  }),
  computed: {
    ...mapGetters({
      appTitle: 'appTitle'
    })
  }
}
</script>

<style>

</style>
