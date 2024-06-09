<template>
  <dt>{{ definition.dt }}</dt>
  <dd>{{ definition.dd }}</dd>
</template>

<script>
export default {
  name: 'DefinitionHw8',
  props: {
    definition: {
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
  }
}
</script>