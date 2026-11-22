const postModel = require('../models/post.model')
const uploadFile = require('../services/storage.service')

async function updatePost(req, res) {
    const id = req.params.id

    const img = await uploadFile(req.file.buffer)

    const updated = await postModel.findOneAndUpdate({
        _id: id
    }, {
        image: img.url,
        caption: req.body.caption
    }, {
        new: true
    })

    return res.status(200).json({
        message: 'Post updated successfully',
        updated
    })
}

module.exports = { updatePost }