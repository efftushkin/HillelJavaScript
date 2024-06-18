<template>
  <h1>Приклад компонента Collapse</h1>
  <collapse-hw16 text="Це прихований текст" :opened="true" />
</template>

<script>
import CollapseHw16 from './components/CollapseHw16.vue'

export default {
  name: 'App',
  components: {
    CollapseHw16
  }
}
</script>
