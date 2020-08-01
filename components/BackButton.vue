<template>
  <nuxt-link to="" @click.native="goBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather-arrow-left"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BackButton',

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.feather-arrow-left {
  stroke: white;
}
</style>
