<template>
  <div>
    <!-- <h1>{{ getBikes }}</h1> -->
    <h1>{{ bikes }}</h1>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'LargeCard',

  computed: {
  // ...mapActions({
  //   getBikes: 'bike/fetchAllBikes'
  // }),
    bikes () {
      return this.$store.state.bike.bikes
    }
  }
  // },

  // mounted () {
  //   this.$store.dispatch('bike/fetchAllBikes')
  // }
}
</script>

<style lang="scss" scoped>

</style>
