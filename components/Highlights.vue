<template>
  <div>
    <ul class="highlights">
      <li v-for="hightlight in highlights" :key="hightlight.id">
        <svg>
          <use xlink:href="#checkCircle" />
        </svg>
        {{ hightlight.description }}
      </li>
    </ul>

    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol
        id="checkCircle"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary-color)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-check-circle"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </symbol>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Highlights',

  props: {
    highlights: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.highlights {
  list-style-type: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    padding-bottom: .8rem;
  }

  svg {
    height: 16px;
    width: 16px;
    flex: 0 0 16px;
    margin-top: 2px;
    margin-right: calc( var(--spacing) / 2);
  }
  // list-style-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>');
}

</style>
