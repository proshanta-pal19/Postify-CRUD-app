const express = require('express')
const { deletePost } = require('../controllers/deletepost.controller')

const router = express.Router()

router.delete('/posts/:id', deletePost)

module.exports = router