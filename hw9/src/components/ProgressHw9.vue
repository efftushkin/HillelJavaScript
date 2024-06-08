<template>
  <div class="progress">
    <div :class="['progress-bar', bgClass]" role="progressbar" :style="{ width: percents }" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar">{{ percents }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProgressHw9',
  props: {
    percentage: {
      type: Number,
      required: true
    }
  },
  computed: {
    percents() {
      return this.percentage + '%';
    },
    bgClass() {
      switch(true) {
        case (this.percentage >= 80):
          return 'bg-success';
        case (this.percentage >= 50):
          return 'bg-warning';
        default:
          return 'bg-danger';
      }
    }
  }
}
</script>