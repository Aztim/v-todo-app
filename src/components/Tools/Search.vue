<template>
  <v-text-field
    :value="search"
    @input="setSearch"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ 'closed' : searchClosed && !search }"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  ></v-text-field>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      searchClosed: true
    }
  },
  computed: {
    ...mapGetters({
      search: 'searchValue'
    })
  },
  methods: {
    setSearch (e) {
      // this.$store.dispatch('setSearchValue', e)
      this.$store.commit('setSearchValue', e)
      console.log(e)
    }
  }

}
</script>

<style lang="sass">
  .expanding-search
    transition: max-width 0.3s
    .v-input__slot
      cursor: pointer !important
      &:before, &:after
        border-color: transparent !important
    &.closed
      max-width: 45px
      .v-input__slot
        background: transparent !important
</style>
