<template>
  <div id="app">
    <div id="nav">
      <router-link to="/example1">Example 1</router-link> |
      <router-link to="/example2">Example 2</router-link> |
      <router-link to="/example3">Example 3</router-link> |
      <router-link to="/example4">Example 4</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
