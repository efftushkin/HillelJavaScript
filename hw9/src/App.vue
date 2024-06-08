<template>
  <progress-hw9 :percentage='0'/>
  <br>
  <progress-hw9 :percentage='20'/>
  <br>
  <progress-hw9 :percentage='40'/>
  <br>
  <progress-hw9 :percentage='60'/>
  <br>
  <progress-hw9 :percentage='80'/>
  <br>
  <progress-hw9 :percentage='100'/>
</template>

<script>
import ProgressHw9 from './components/ProgressHw9.vue'

export default {
  name: 'App',
  components: {
    ProgressHw9
  }
}
</script>
