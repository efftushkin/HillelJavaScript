<template>
  <definitions-hw8 :definitions="definitions"/>
</template>

<script>
import DefinitionsHw8 from './components/DefinitionsHw8.vue'

export default {
  name: 'HomeWork8',
  data() {
    return {
      definitions: [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 }
      ]
    };
  },
  components: {
    DefinitionsHw8
  }
}
</script>
