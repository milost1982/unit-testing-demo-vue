<template>
  <div class="example3">
    <form @submit="onSubmit">
      <label for="github_username">Github username: <input type="text" name="github_username" id="github_username" v-model="username"></label>
      <input type="submit" value="Get Profile">
    </form>

    <GithubProfile ref="githubProfile" />
  </div>
</template>

<script>
import GithubProfile from '@/components/GithubProfile.vue'

export default {
  components: {
    GithubProfile
  },
  data () {
    return {
      username: 'yyx990803'
    }
  },
  methods: {
    onSubmit (e) {
      this.$refs.githubProfile.getGithubProfile(this.username)
      e.preventDefault() // don't refresh page
    }
  }
}
</script>

<style>
.github-profile-component {
  border: 2px dashed darkgreen;
  min-height: 200px;
  margin: 20px 30px;
  padding: 20px;
}
</style>
