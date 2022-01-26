const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostCollection()
  res.send(await posts.find({}).toArray())
})

// Add Post

// Delete Post

async function loadPostCollection () {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://aroblesgalit:jOtjYrtOdKFCMm2n@vue-express.r7fqb.mongodb.net/vue-express?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  ) // Connects to database

  return client.db('vue-express').collection('posts')
}

module.exports = router
