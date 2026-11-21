const postModel = require("../models/post.model");

async function getPost(req, res) {
    const posts = await postModel.find()

    return res.status(200).json({
        message: 'Post fetched successfully',
        posts
    })
}

module.exports = { getPost }