<template>
  <list-group-hw12 :elements="kids"/>
</template>

<script>
import ListGroupHw12 from './components/ListGroup.vue'

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
    ListGroupHw12
  }
}
</script>
