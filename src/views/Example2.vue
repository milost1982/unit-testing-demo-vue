<template>
  <div class="example2">
    <RevealContent class="reveal-component"/>
  </div>
</template>

<script>
import RevealContent from '@/components/RevealContent.vue'

export default {
  components: {
    RevealContent
  }
}
</script>

<style scoped>
.reveal-component {
  border: 2px dashed darkred;
  margin: 0 auto;
  padding: 10px;
  max-width: 600px;
  margin-top: 40px;
}
</style>
