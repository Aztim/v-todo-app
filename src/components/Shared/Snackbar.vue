<template>
  <v-snackbar
    v-model="snackbar.show"
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        @click="hideSnackbar"
        text
        v-bind="attrs"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      snackbar: 'snackbar'
    })
  },
  methods: {
    ...mapActions(['hideSnackbar'])

  }
}
</script>

<style>

</style>
