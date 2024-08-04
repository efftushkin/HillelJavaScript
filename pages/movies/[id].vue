<template>
  <div>
    <h1>Single movie page {{route.params.id}}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, assumenda eum illo incidunt libero magni nemo officiis praesentium quam ratione saepe similique veritatis voluptate voluptatibus?
    </p>
  </div>
</template>

<script setup>

definePageMeta({
   layout: 'single-movie'
 })

const route = useRoute()



</script>

<style lang="scss" scoped>

</style>