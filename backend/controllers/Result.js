const Result=require('../models/Result');
const getAllResults=async (req,res)=>{
    const results=await Result.find().then(results=>{
        res.json(results);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createResults=async (req,res)=>{
    
    const result=await Result.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({result});
}
const getSingleResult=async (req,res)=>{
    const result=await Result.findById(req.params.resultId).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateResult=async (req,res)=>{
    const result=await Result.findByIdAndUpdate(req.params.resultId,req.body,{new:true}).then(result=>{
        res.json(result);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteResults=async (req,res)=>{
    const result= await Result.findByIdAndDelete(req.params.resultId).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllResults,
    createResults,
    getSingleResult,
    updateResult,
    deleteResults
}