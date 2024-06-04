<template>
  <div id="carousel" class="carousel slide  div630" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div :class="['carousel-item', element.active && 'active']" v-for="(element, index) in carouselElements" :key="index">
        <img alt="" class="d-block w-100" :src="element.src">
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" @click="previous">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" @click="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselHw14',
  props: {
    paths: {
      type: Array,
      required: true
    }
  },
  data() {
    let carouselElements = [];
    this.paths.forEach((path, index) => {carouselElements.push({src: path, active: index == 0})});
    return {carouselElements: carouselElements};
  },
  methods: {
    previous() {
      if (this.carouselElements.length < 2) return;
      
      let maxIndex = this.carouselElements.length - 1;
      
      for (let index = 0; index <= maxIndex; index++) {
        if (this.carouselElements[index].active) {
          this.carouselElements[index].active = false;
          
          if (index == 0) {
            this.carouselElements[maxIndex].active = true;
          } else {
            this.carouselElements[index - 1].active = true;
          }
          return;
        }
      }
    },
    next() {
      if (this.carouselElements.length < 2) return;
      let maxIndex = this.carouselElements.length - 1;
      for (let index = 0; index <= maxIndex; index++) {
        if (this.carouselElements[index].active) {
          this.carouselElements[index].active = false;
          if (index == maxIndex) {
            this.carouselElements[0].active = true;
          } else {
            this.carouselElements[index + 1].active = true;
          }
          return;
        }
      }
    }
  }
}
</script>

<style>
.div630 {
  height: 630px;
  width: 630px;
}
</style>