const express=require('express');
const postRouter=express.Router();
const{getAllPosts,
    createPosts,
    getSinglePost,
    updatePost,
    deletePosts}=require('../controllers/Post');

    postRouter.route('/').get(getAllPosts).post(createPosts);
    postRouter.route('/:id').get(getSinglePost).put(updatePost).delete(deletePosts);
module.exports=postRouter;