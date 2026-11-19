const express = require('express')
const createPostRoutes = require('./routes/createpost.route')

const app = express()
app.use(express.json())

app.use('/api/new', createPostRoutes)

module.exports = app