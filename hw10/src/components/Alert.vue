<template>
  <div :class="alertClass">[{{ type }}] {{ text }}</div>
</template>

<script>
export default {
  name: 'AlertHw10',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    alertClass() {
      return 'alert alert-' + this.type;
    }
  }
}
</script>
