<template>
  <list-group :elements="kids"/>
</template>

<script>
import ListGroup from './components/ListGroup.vue'

export default {
  name: 'App',
    data() {
      return {
        kids: [
          'Марічка',
          'Остап',
          'Оленка',
          'Степан'
        ]
      };
    },
    components: {
    ListGroup
  }
}
</script>
