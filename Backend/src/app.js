const express = require('express')
const cors = require('cors')
const createPostRoutes = require('./routes/createpost.route')
const getPostRoutes = require('./routes/getpost.route')
const deletePostRoutes = require('./routes/deletepost.route')
const updatePostRoutes = require('./routes/updatepost.route')

const app = express()
app.use(cors());
app.use(express.json())

app.use('/api/new', createPostRoutes)
app.use('/api/feed', getPostRoutes)
app.use('/api/delete/', deletePostRoutes)
app.use('/api/update', updatePostRoutes)

module.exports = app