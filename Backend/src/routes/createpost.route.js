const express = require('express')
const multer = require('multer')
const createPostController = require('../controllers/createpost.controller')

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/create', upload.single('image'), createPostController.createPost)

module.exports = router