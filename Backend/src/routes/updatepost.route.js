const express = require('express')
const multer = require('multer')
const { updatePost } = require('../controllers/updatepost.controller')

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.patch('/posts/:id', upload.single('image'), updatePost)

module.exports = router