<template>
  <div :scroll="handleScroll()">
    <div class="gallery">
      <div :scroll="handleScroll()" class="images">
        <img
          v-for="(image, index) in bike.Images"
          :key="index"
          :src="'http://localhost:1337' + image.url"
          :alt="image.alt"
        >
      </div>
      <ul v-if="bike.Images.length >= 2" class="indicators">
        <li
          v-for="(image, index) in bike.Images"
          :key="index"
          class="indicator"
        >
          <button class="indicator__button" aria-pressed="false" @click="clickIndicator(index)" />
        </li>
      </ul>
    </div>
    <h1>{{ bike.Name }}</h1>
    <p>{{ bike.Description }}</p>
    <ul>
      <li v-for="(category, index) in bike.categories" :key="index">
        {{ category.Name }}
      </li>
    </ul>
    <!-- <pre>{{ bike }}</pre> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data () {
    return {
      name: this.$route.params.id,
      currentImage: 0
    }
  },

  computed: {
    bike () {
      return this.$store.state.bike.bikes.find(bike => bike.Name === this.name)
    }
  },

  mounted () {
    if (this.bike.Images.length >= 2) {
      const indicators = this.$el.querySelector('.indicators')
      indicators.childNodes[this.currentImage].childNodes[0].setAttribute('aria-pressed', 'true')
    }
  },

  methods: {
    clickIndicator (index) {
      if (index === this.currentImage) {
        return
      }

      const carousel = this.$el.querySelector('.images')
      const width = carousel.offsetWidth
      const indicators = this.$el.querySelector('.indicators')

      indicators.childNodes[this.currentImage].childNodes[0].setAttribute('aria-pressed', 'false')
      this.currentImage = index
      carousel.scrollTo(width * index, 0)

      indicators.childNodes[index].childNodes[0].setAttribute('aria-pressed', 'true')
    },
    handleScroll () {
      console.log('Large')
    }
  }
}
</script>

<style lang="scss">
.gallery {
  position: relative;
  margin: calc(var(--spacing) * -1) calc(var(--spacing) * -1) var(--spacing);
  height: 65vh;

  // scrollbar-width: none;
  // -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.images {
  // max-height: 60vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 100%);

  // overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit:cover;

    scroll-snap-align: center;
  }
}

.indicators {
  position: absolute;
  background: linear-gradient(transparent, hsla(0, 0%, 0%, 0.6));
  bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;

  .indicator {

    &__button {
      background: none;
      border: none;
      color: var(--white);
      overflow: hidden;
      padding: .8rem;
      cursor: pointer;

      &::after {
        content: '○';
        font-size: 1.2em;
      }

      &:hover {
        color: hsl(0, 0%, 75%);
      }

      &:active {
        color: hsl(0, 0%, 90%);
      }

      &[aria-pressed="true"]::after {
        content: '●';
      }
    }
  }

}

@supports (scroll-snap-align: start) {
  /* modern scroll snap points */
  .images {
    scroll-snap-type: x mandatory;

    & > img {
      scroll-snap-align: center;
    }
  }

}

@supports not (scroll-snap-align: start) {
  /* old scroll snap points spec */
  .images {
    -webkit-scroll-snap-type: mandatory;
            scroll-snap-type: mandatory;
    -webkit-scroll-snap-destination: 0 50%;
            scroll-snap-destination: 0 50%;
    -webkit-scroll-snap-points-x: repeat(100%);
            scroll-snap-points-x: repeat(100%);

    & > img {
      scroll-snap-coordinate: 0 0;
    }
  }
}
</style>
