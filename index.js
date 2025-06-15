require("dotenv").config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "adityamatta",
  "id": 67840694,
  "node_id": "MDQ6VXNlcjY3ODQwNjk0",
  "avatar_url": "https://avatars.githubusercontent.com/u/67840694?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/adityamatta",
  "html_url": "https://github.com/adityamatta",
  "followers_url": "https://api.github.com/users/adityamatta/followers",
  "following_url": "https://api.github.com/users/adityamatta/following{/other_user}",
  "gists_url": "https://api.github.com/users/adityamatta/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/adityamatta/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/adityamatta/subscriptions",
  "organizations_url": "https://api.github.com/users/adityamatta/orgs",
  "repos_url": "https://api.github.com/users/adityamatta/repos",
  "events_url": "https://api.github.com/users/adityamatta/events{/privacy}",
  "received_events_url": "https://api.github.com/users/adityamatta/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-07-04T19:18:07Z",
  "updated_at": "2021-08-28T20:05:38Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("adityadotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai aur code</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
