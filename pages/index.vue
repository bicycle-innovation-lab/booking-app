<template>
  <div id="bikesContainer container">
    <h1>
      Explore our bikes
    </h1>
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',

  components: {
    CardContainer
  },

  async fetch ({ store }) {
    await store.dispatch('bikes/fetchAllBikes')
  },

  computed: {
    bikes () {
      return this.$store.state.bikes.all
    }
  },

  head () {
    return {
      title: 'Bicycle innovation lab - bikes'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin-top: 0;
    margin-bottom: 2rem;
  }
}

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
