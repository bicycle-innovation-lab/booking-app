<template>
  <ul class="categories">
    <li v-for="category in categories" :key="category.id">
      <img :src="$config.axios.baseURL + category.icon.url" alt="">
      <small>{{ category.name }}</small>
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
  gap: .8rem;

  li {
    display: flex;
    align-items: center;
    padding: .5rem .8rem;
    border: 1px solid hsl(0, 0%, 92%);
    border-radius: var(--border-radius);

    img {
      flex: 0 0;
      width: 16px;
      height: 16px;
      margin-right: .4rem;
      margin-top: 2px;
    }

    small {
      flex: 1 0;
    }
  }
}
</style>
