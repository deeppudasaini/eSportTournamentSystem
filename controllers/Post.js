const Post=require('../models/Posts');
const getAllPosts=async (req,res)=>{
    const posts=await Post.find().then(posts=>{
        res.json(posts);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createPosts=async (req,res)=>{
    
    const post=await Post.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({post});
}
const getSinglePost=async (req,res)=>{
    const post=await Post.findById(req.params.postId).then(post=>{
        res.json(post);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updatePost=async (req,res)=>{
    const post=await Post.findByIdAndUpdate(req.params.postId,req.body,{new:true}).then(post=>{
        res.json(post);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deletePosts=async (req,res)=>{
    const post= await Post.findByIdAndDelete(req.params.postId).then(post=>{
        res.json(post);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllPosts,
    createPosts,
    getSinglePost,
    updatePost,
    deletePosts
}