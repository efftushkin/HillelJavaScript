<template>
  <div>
    <h1>{{data?.Title}}</h1>
    <img :src="data?.Poster" :alt="`${data?.Title} poster`">
    <p>
      {{data?.Plot}}
    </p>
  </div>
</template>

<script setup>

definePageMeta({
   layout: 'single-movie'
 })

const route = useRoute()

const {data, error} = await useFetch('http://www.omdbapi.com/?apikey=21eac196&i=' + route.params.id)

if(data.value?.Response === 'False') {
  throw createError({
    statusCode: 404,
    statusMessage: data.Error,
    fatal: true
  })
} else if(error?.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
    fatal: true
  })
}

</script>

<style lang="scss" scoped>

</style>