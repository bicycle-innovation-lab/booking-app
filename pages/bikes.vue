<template>
  <div id="bikesContainer">
    <h1>Explore the bikes</h1>
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'

export default {

  components: {
    CardContainer
  },

  async asyncData ({ store }) {
    await store.dispatch('bike/fetchAllBikes')
  },

  head () {
    return {
      title: 'Bicycle innovation lab - bikes'
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
