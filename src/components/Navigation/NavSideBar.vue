<template>
    <v-navigation-drawer
    v-model="isDrawer"
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

    <div class="mb-4">
      <NavbarPopup  />
    </div>
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
</template>

<script>
import NavbarPopup from './NavbarPopup'
export default {
  components: { NavbarPopup },
  props: {
    isDrawer: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
