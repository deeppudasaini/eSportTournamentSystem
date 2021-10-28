const express=require('express');
const postRouter=express.Router();
const {checkAuthenticated,afterAuthenticated}=require('../config/auth');
const{getAllPosts,
    createPosts,
    getSinglePost,
    updatePost,
    deletePosts}=require('../controllers/Post');

    postRouter.route('/',afterAuthenticated).get(getAllPosts).post(createPosts);
    postRouter.route('/:id').get(getSinglePost).put(updatePost).delete(deletePosts);
module.exports=postRouter;