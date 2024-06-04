<template>
  <carousel-hw14 :paths="pics" />
</template>

<script>
import CarouselHw14 from './components/Carousel.vue'

export default {
  name: 'App',
  data() {
    return {
      pics: [
      './img/283633842.webp',
      './img/313772892.webp',
      './img/315331066.webp',
      './img/315331067.webp',
      './img/315332199.webp',
      './img/315332200.webp',
      './img/315475219.webp',
      './img/394227651.webp',
      './img/394227662.webp',
      './img/427889825.webp',
      './img/427889826.webp',
    ]
    }
  },
  components: {
    CarouselHw14
  }
}
</script>
