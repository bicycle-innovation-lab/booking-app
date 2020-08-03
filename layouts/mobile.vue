<template>
  <div>
    <Nuxt keep-alive class="container" />
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
  min-width: 320px;
  max-width: 500px;
  margin: 0 auto;
  padding: var(--spacing);
  margin-bottom: 10rem;
}

@media screen and (min-width: 48em) {
  .container {
    max-width: 48em;
  }
}

@media screen and (min-width: 62em) {
  .container {
    max-width: 62em;
  }
}

.tabbar {
  display: block;
  width: 100%;
}
</style>
