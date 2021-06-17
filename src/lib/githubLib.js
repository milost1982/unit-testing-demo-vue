import axios from 'axios' // external dependency from npm package registry

async function getGithubProfile (username) {
  const url = `https://api.github.com/users/${username}`

  var response = await axios.get(url)
  return response.data
}

export default {
  getGithubProfile
}

// sample json from github API:
// {
//   "login": "yyx990803",
//   "id": 499550,
//   "node_id": "MDQ6VXNlcjQ5OTU1MA==",
//   "avatar_url": "https://avatars.githubusercontent.com/u/499550?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/yyx990803",
//   "html_url": "https://github.com/yyx990803",
//   "followers_url": "https://api.github.com/users/yyx990803/followers",
//   "following_url": "https://api.github.com/users/yyx990803/following{/other_user}",
//   "gists_url": "https://api.github.com/users/yyx990803/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/yyx990803/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/yyx990803/subscriptions",
//   "organizations_url": "https://api.github.com/users/yyx990803/orgs",
//   "repos_url": "https://api.github.com/users/yyx990803/repos",
//   "events_url": "https://api.github.com/users/yyx990803/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/yyx990803/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Evan You",
//   "company": "vuejs",
//   "blog": "http://evanyou.me",
//   "location": "New Jersey ⇄ China",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 171,
//   "public_gists": 69,
//   "followers": 70950,
//   "following": 94,
//   "created_at": "2010-11-28T01:05:40Z",
//   "updated_at": "2021-06-10T12:50:13Z"
// }
