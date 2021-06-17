<template>
  <div class="home">
    <HelloWorld msg="Hello World" />
    <HelloWorld :msg="text" />
    Message: <input type="text" v-model="text">

    <RevealContent class="reveal-component"/>
    <GithubProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RevealContent from '@/components/RevealContent.vue'
import GithubProfile from '@/components/GithubProfile.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    RevealContent,
    GithubProfile
  },
  data () {
    return {
      text: 'Welcome to Your Vue.js App'
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
</style>
