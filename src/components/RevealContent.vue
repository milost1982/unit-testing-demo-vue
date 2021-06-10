<template>
  <div class="reveal-content-component">
    <!-- <button @click="toggleReveal">Click to reveal</button> -->
    <label class="checkbox-label"><input type="checkbox" name="checkbox" class="checkbox" v-model="isRevealed">Click to reveal content</label>

    <div v-if="isRevealed" class="content" >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam suscipit neque, voluptates explicabo animi odit maiores eos recusandae. Placeat animi delectus obcaecati aliquid exercitationem corrupti sed molestias. Quidem, neque!
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isRevealed: false
    }
  },
  methods: {
    toggleReveal () {
      this.isRevealed = !this.isRevealed
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 15px;
  text-align: left;
  font-family: sans-serif;
}
</style>
