<template>
  <div>
    <v-list-item-action>
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            icon
            handle="handle"
            v-bind="attrs"
            v-on="on"
        >
            <v-icon>mdi-drag-horizontal-variant</v-icon>
        </v-btn>
      </template>
      <span>Hold to drag it</span>
    </v-tooltip>
    </v-list-item-action>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
