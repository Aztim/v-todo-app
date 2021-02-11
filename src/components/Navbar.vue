<template>
<div>
  <NavSideBar
    :is-drawer = drawer
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

      <v-toolbar-title>Vuetify Todo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="#31437b">
      <span>Awesome! You added a new task</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import NavSideBar from './NavSideBar'
export default {
  components: { NavSideBar },
  data: () => ({
    snackbar: false,
    drawer: false,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' }
    ]
  })
}
</script>

<style>

</style>
