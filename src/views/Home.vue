<template>
  <div class="home">
    <HelloWorld msg="Hello World" />
    <HelloWorld :msg="text" />
    Message: <input type="text" v-model="text">

    <RevealContent class="reveal-component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RevealContent from '@/components/RevealContent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    RevealContent
  },
  data () {
    return {
      text: 'Welcome to Your Vue.js App',
    }
  }
}
</script>
<style scoped>
.home > * {
  margin-top: 40px;
}
.home input {
  margin-top: 10px;
  width: 300px;
}

.reveal-component {
  border: 2px dashed darkred;
  margin: 0 auto;
  padding: 10px;
  max-width: 600px;
  margin-top: 40px;
}
</style>
