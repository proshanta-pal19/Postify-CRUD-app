const postModel = require("../models/post.model")

async function deletePost(req, res){
    const id = req.params.id

    await postModel.findOneAndDelete({
        _id: id
    })

    return res.status(200).json({
        message: 'Post deleted successfully'
    })
}

module.exports = { deletePost }