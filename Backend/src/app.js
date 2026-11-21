const express = require('express')
const createPostRoutes = require('./routes/createpost.route')
const getPostRoutes = require('./routes/getpost.route')

const app = express()
app.use(express.json())

app.use('/api/new', createPostRoutes)
app.use('/api/feed', getPostRoutes)

module.exports = app