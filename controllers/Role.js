const Role=require('../models/Role');
const getAllRoles=async (req,res)=>{
    const roles=await Role.find().then(roles=>{
        res.json(roles);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createRoles=async (req,res)=>{
    
    const role=await Role.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({role});
}
const getSingleRole=async (req,res)=>{
    const role=await Role.findById(req.params.roleId).then(role=>{
        res.json(role);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateRole=async (req,res)=>{
    const role=await Role.findByIdAndUpdate(req.params.roleId,req.body,{new:true}).then(role=>{
        res.json(role);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteRoles=async (req,res)=>{
    const role= await Role.findByIdAndDelete(req.params.roleId).then(role=>{
        res.json(role);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllRoles,
    createRoles,
    getSingleRole,
    updateRole,
    deleteRoles
}