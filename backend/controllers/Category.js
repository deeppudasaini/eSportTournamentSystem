const Category=require('../models/Category');
const getAllCategorys=async (req,res)=>{
    const categorys=await Category.find().then(categorys=>{
        res.json(categorys);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createCategorys=async (req,res)=>{
    
    const category=await Category.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({category});
}
const getSingleCategory=async (req,res)=>{
    const category=await Category.findById(req.params.categoryId).then(category=>{
        res.json(category);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateCategory=async (req,res)=>{
    const category=await Category.findByIdAndUpdate(req.params.categoryId,req.body,{new:true}).then(category=>{
        res.json(category);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteCategorys=async (req,res)=>{
    const category= await Category.findByIdAndDelete(req.params.categoryId).then(category=>{
        res.json(category);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllCategorys,
    createCategorys,
    getSingleCategory,
    updateCategory,
    deleteCategorys
}