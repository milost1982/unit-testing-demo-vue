<template>
  <div class="example1">
    <HelloWorld msg="Hello World" />
    <HelloWorld :msg="text" />
    Message: <input type="text" v-model="text">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      text: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.example1 > * {
  margin-top: 40px;
}
.example1 input {
  margin-top: 10px;
  width: 300px;
}
</style>
