<template>
  <div class="btn-group" role="group">
    <button type="button" :class="classLeftButton" @click="clickLeftButton">Left</button>
    <button type="button" :class="classRightButton" @click="clickRightButton">Right</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroupHw13',
  data() {
    return {
      isLeftButtonActive: false,
      isRightButtonActive: false
    }
  },
  computed: {
    classLeftButton() {
      if (this.isLeftButtonActive) {
        return 'btn btn-secondary active left';
      }
      return 'btn btn-secondary left';
    },
    classRightButton() {
      if (this.isRightButtonActive) {
        return 'btn btn-secondary active right';
      }
      return 'btn btn-secondary right';
    }
  },
  methods: {
    clickLeftButton() {
      this.isLeftButtonActive = true;
      this.isRightButtonActive = false;
    },
    clickRightButton() {
      this.isRightButtonActive = true;
      this.isLeftButtonActive = false;
    }
  }
}
</script>