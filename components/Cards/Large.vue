<template>
  <article @scroll.passive="handleScroll($event)">
    <nuxt-link
      v-for="(bike, index) in bikes"
      :key="index"
      :to="`${bike.id}`"
      class="card"
    >
      <div class="card__image">
        <img :src="$config.axios.baseURL + bike.images[0].formats.small.url" :alt="bike.images[0].alt">
      </div>
      <h3>{{ bike.name }}</h3>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'LargeCard',

  async fetch ({ store }) {
    await store.dispatch('bikes/fetchAllBikes')
  },

  computed: {
    bikes () {
      return this.$store.state.bikes.all
    },
    position: {
      get () {
        return this.$store.state.ui.position
      },
      set (newPosition) {
        this.$store.commit('ui/setPosition', newPosition)
      }
    }
  },

  mounted () {
    console.log('mounted', this.position)
    this.$el.scrollLeft = this.position
  },

  methods: {
    handleScroll ({ target }) {
      this.position = target.scrollLeft
      console.log('handleScroll', this.position)
    }
  }
}
</script>

<style lang="scss" scoped>
.card > h3{
  font-size: 1rem;
  color: gray;
  margin-top: .8rem;
  margin-left: .2rem;
  font-weight: 400;
}
.card__image {
  height: 180px;

  img {
    box-shadow: var(--box-shadow);
  }
}
</style>
