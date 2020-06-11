<template>
  <div>
    <h1>Explore the bikes</h1>
    <LargeCard />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, reprehenderit pariatur. Eum aperiam blanditiis perferendis. Laudantium cum adipisci, beatae laboriosam aspernatur quisquam quae obcaecati eos, sequi iste sit tempore dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae corrupti numquam, facere nisi pariatur ea.</p>
  </div>
</template>

<script>
import LargeCard from '@/components/Cards/Large.vue'

export default {

  components: {
    LargeCard
  },

  head () {
    return {
      title: 'Bicycle innovation lab - bikes'
    }
  },

  async asyncData ({ store }) {
    await store.dispatch('bike/fetchAllBikes')
    await console.log('ASYNC FETCH')
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
