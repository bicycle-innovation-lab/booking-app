<template>
  <ul class="categories">
    <li v-for="category in categories" :key="category.id">
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CategoryLabels',

  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  list-style-type: none;
  padding: 0;
  display: flex;
}
</style>
