<template>
  <div class="progress">
    <div :class="classWithBackground" role="progressbar" :style="{ width: percents }" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar">{{ percents }}</div>
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
    classWithBackground() {
      if (this.percentage >= 80) {
        return 'progress-bar bg-success';
      }
      if (this.percentage >= 50) {
        return 'progress-bar bg-warning';
      }
      return 'progress-bar bg-danger';
    }
  }
}
</script>