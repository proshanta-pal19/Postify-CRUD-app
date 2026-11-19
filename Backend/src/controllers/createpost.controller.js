const postModel = require('../models/post.model')
const uploadFile = require('../services/storage.service')

async function createPost(req, res) {
    const img = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: img.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: 'Post created successfully',
        post
    })
}

module.exports = { createPost }