<template>
  <div class="hello-world-component">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello-world-component {
  border: 2px dashed blue;
  max-width: 600px;
  margin: 0 auto;
}
</style>
