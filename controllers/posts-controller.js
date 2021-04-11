const postsService = require("../services/posts-service")

module.exports = (app) => {

    const allPosts = (req,res) => {
        const userID = req.params.userId

        postsService.findPostByUserId(userID).then((posts) => {
            if(posts){
                res.json(posts)
            }else{
                res.send(404)
            }

        })
    }

    const createPosts = (req,res) => {
        const userPost = req.body
        console.log(userPost)
        postsService.createPost(userPost).then((actualPost) => res.json(actualPost))
    }

    const findPostId = (req,res) => {
        const postID = req.params.postId

        postsService.findPostById(postID).then((actualPost) => {
            if(actualPost){
                res.send(actualPost)
            }else{
                res.send(404)
            }
        })

    }

    //606fa00930b43137a4cbb585



    app.post("/api/create_post", createPosts)
    app.get("/api/:userId/posts", allPosts)
    app.get("/api/posts/:postId", findPostId)
}