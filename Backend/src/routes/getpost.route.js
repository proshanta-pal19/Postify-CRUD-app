const express = require('express')
const getPostController = require('../controllers/getpost.controller')

const router = express.Router()

router.get('/posts', getPostController.getPost)

module.exports = router