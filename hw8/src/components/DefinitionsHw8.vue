<template>
  <dl className="definitions-list">
    <definition-hw8  v-for="(definition, index) in definitions" :key="index" :definition="definition"/>
  </dl>
</template>

<script>
import DefinitionHw8 from './DefinitionHw8.vue'

export default {
  name: 'DefinitionsHw8',
  props: {
    definitions: [
      {
        dt: {
          type: String,
          required: false
        },
        dd: {
          type: String,
          required: false
        },
        id: {
          type: Number,
          required: true
        },
      }
    ]
  },
  components: {
    DefinitionHw8
  }
}
</script>