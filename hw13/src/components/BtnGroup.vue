<template>
  <div class="btn-group" role="group">
    <button type="button" :class="['btn btn-secondary', 'left', leftButtonActive && 'active']" @click="clickLeftButton">Left</button>
    <button type="button" :class="['btn btn-secondary', 'right', rightButtonActive && 'active']" @click="clickRightButton">Right</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  data() {
    return {
      leftButtonActive: false,
      rightButtonActive: false
    }
  },
  methods: {
    clickLeftButton() {
      this.leftButtonActive = true;
      this.rightButtonActive = false;
    },
    clickRightButton() {
      this.rightButtonActive = true;
      this.leftButtonActive = false;
    }
  }
}
</script>