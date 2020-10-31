<template>
<div>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    color="#31437b"
    >
    <v-list-item>
      <v-list-item-content>
        <div  class="text-center">
          <v-avatar size="100">
            <img src="@/assets/image/avatar-4.jpg" alt="">
          </v-avatar>
          <p class="mt-3">Tim</p>
          <v-list-item-title class="title">
            Vuetify Todo
          </v-list-item-title>
          <v-list-item-subtitle>
            Remastered
        </v-list-item-subtitle>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' }
    ]
  })
}
</script>

<style>

</style>
