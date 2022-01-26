const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Initialize app with express
const app = express()

// Middle ware
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 5000

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`))
