<template>
  <div>
    <h1>{{movie.Title}}</h1>
    <img :src="movie.Poster" :alt="`${movie.Title} poster`">
    <p>
      {{movie.Plot}}
    </p>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

definePageMeta({
   layout: 'single-movie'
 })

const route = useRoute()
const movie = ref([{Title: 'Title for ' + route.params.id, Plot: 'Plot for ' + route.params.id, Poster: ''}])

onMounted(() => {
  getMovie()
})

const getMovie = async () => {
  const data = await useFetch('http://www.omdbapi.com/?apikey=21eac196&i=' + route.params.id)

  console.log(data)

  if(data.data?.value?.Response === 'False') {
    throw createError({
      statusCode: 404,
      statusMessage: data.data.value.Error,
      fatal: true
    })
  } else if(data.error.value) {
    throw createError({
      statusCode: data.error.value.statusCode,
      statusMessage: data.error.value.statusMessage,
      fatal: true
    })
  } else {
    movie.value = (data.data.value)
  }
  return data
}

</script>

<style lang="scss" scoped>

</style>