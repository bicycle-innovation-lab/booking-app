<template>
  <section>
    <header>
      <h2>Featured Bikes</h2>
      <a href="#" title="See all featured bikes">See all</a>
    </header>
    <LargeCard class="scroll-container" keep-alive @scroll.passive="test" />
  </section>
</template>

<script>
import LargeCard from '@/components/Cards/Large.vue'

export default {
  name: 'CardContainer',

  components: {
    LargeCard
  },

  mounted () {
    const scrollContainer = this.$el.querySelector('.scroll-container')
    scrollContainer.addEventListener('scroll', this.test)
  },

  methods: {
    test () {
      console.log('test')
    }
  }
  // },

  // data: {
  //   scrollPosition: .scroll-container.ScrollLeft
  // },

  // watch: {
  // }
}
</script>

<style lang="scss">
section > header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.scroll-container {
  --card-width: 70%;
  display: grid;
  gap: calc(var(--spacing) / 2);
  grid-gap: calc(var(--spacing) / 2);
  grid-template-columns:
    calc(var(--card-width) - var(--spacing))
    repeat(3, calc(var(--card-width) - calc(var(--spacing) * 2)))
    calc(var(--card-width) - var(--spacing));
  margin: 0 calc(var(--spacing) * -1);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.scroll-container > article {
  scroll-snap-align: start;
  scroll-snap-margin: var(--spacing);
  scroll-margin: var(--spacing);

  &:first-child {
    padding-left: var(--spacing);
  }

  &:last-child {
    padding-right: var(--spacing);
    scroll-snap-align: end;
  }
}

.scroll-container:first-child {
  background: #000;
}

@media screen and (min-width: 48em){
  .scroll-container{
    grid-template-columns: repeat(5, calc(40% - 40px));
    // grid-template-rows: 1fr 1fr;
  }
}

@media screen and (min-width: 62em){
  .scroll-container{
    grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: 1fr 1fr;
  }
}
</style>
