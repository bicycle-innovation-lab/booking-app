<template>
  <div>
    <!-- <h1>{{ getBikes }}</h1> -->
    <!-- <pre>{{ bikes }}</pre> -->
    <article v-for="(bike, index) in bikes" :key="index">
      <nuxt-link :to="bike.name" class="card">
        <div class="card__image">
          <img :src="$config.baseURL + bike.images[0].url" :alt="bike.images[0].alt">
        </div>
        <!-- <p>{{ bike.Description }}</p> -->
        <h3>{{ bike.name }}</h3>
        <!-- <p>{{ bike.Price }}</p> -->
      </nuxt-link>
    </article>
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
  .card__image {
    height: 130px;

    img {
      box-shadow: var(--box-shadow);
    }
  }
</style>
