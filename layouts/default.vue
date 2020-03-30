<template>
  <div>
    <nuxt class="container" />
    <TabBar class="tabbar" />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'

export default {
  components: {
    TabBar
  }
}
</script>

<style>
/* Replace with normalize */
body {
  margin: 0;
  padding: 0;
}

.container {
  /* min-width: 40ch; */
  /* max-width: 70ch; */
  min-width: 320px;
  max-width: 500px;
  /* width: 360px; */
  margin: 0 auto;
  padding: 1rem;
}

.tabbar {
  display: block;
  width: 100%;
}
</style>
