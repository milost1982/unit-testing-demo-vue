<template>
  <div class="github-profile-component">
    <div v-if="profile">
      <img alt="Avatar"
           height="200"
           width="200"
           class="avatar"
           :src="profile.avatar_url"
      >
      <div class="description">
        <span class="profile-name">{{ profile.name }}</span>
        <span class="profile-login">Username: {{ profile.login }}</span>
        <span class="profile-company">Company: {{ profile.company }}</span>
        <span class="profile-location">Location: {{ profile.location }}</span>
        <span class="profile-blog">Blog: <a :href="profile.blog" target="_blank">{{ profile.blog }}</a></span>
        <span class="profile-url"><a :href="profile.html_url" target="_blank">Github Page</a></span>
      </div>
    </div>
    <div v-if="fetchError">
      <p style="color: red">{{ fetchError }}</p>
    </div>
  </div>
</template>

<script>
import githubLib from '@/lib/githubLib'

export default {
  data () {
    return {
      profile: null,
      fetchError: null
    }
  },
  // mounted () {
  //   this.getGithubProfile(this.username)
  // },
  methods: {
    async getGithubProfile (username) {
      try {
        this.profile = null
        this.fetchError = null

        this.profile = await githubLib.getGithubProfile(username)
      } catch (err) {
        console.error(err)
        this.fetchError = err
      }
    }
  }
}
</script>

<style scoped>
.avatar {
  height:auto;
  border-radius: 50%;
}
.description > span {
  display: block;
  margin: 0 0 8px 0;
}
.profile-name {
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
}

</style>
