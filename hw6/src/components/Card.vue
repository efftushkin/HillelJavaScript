<template>
  <div className="card">
    <div className="card-body">
      <h4 v-if="title" className="card-title">{{ title }}</h4>
      <p v-if="text" className="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHw6',
  props: {
    title: String,
    text: String
  }
}
</script>
