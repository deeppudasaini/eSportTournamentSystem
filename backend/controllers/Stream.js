const Stream=require('../models/Stream');
const getAllStreams=async (req,res)=>{
    const streams=await Stream.find().then(streams=>{
        res.json(streams);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createStreams=async (req,res)=>{
    
    const stream=await Stream.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({stream});
}
const getSingleStream=async (req,res)=>{
    const stream=await Stream.findById(req.params.streamId).then(stream=>{
        res.json(stream);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateStream=async (req,res)=>{
    const stream=await Stream.findByIdAndUpdate(req.params.streamId,req.body,{new:true}).then(stream=>{
        res.json(stream);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteStreams=async (req,res)=>{
    const stream= await Stream.findByIdAndDelete(req.params.streamId).then(stream=>{
        res.json(stream);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllStreams,
    createStreams,
    getSingleStream,
    updateStream,
    deleteStreams
}