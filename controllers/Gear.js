const Gear=require('../models/Gear');
const getAllGears=async (req,res)=>{
    const gears=await Gear.find().then(gears=>{
        res.json(gears);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createGears=async (req,res)=>{
    
    const gear=await Gear.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({gear});
}
const getSingleGear=async (req,res)=>{
    const gear=await Gear.findById(req.params.gearId).then(gear=>{
        res.json(gear);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateGear=async (req,res)=>{
    const gear=await Gear.findByIdAndUpdate(req.params.gearId,req.body,{new:true}).then(gear=>{
        res.json(gear);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteGears=async (req,res)=>{
    const gear= await Gear.findByIdAndDelete(req.params.gearId).then(gear=>{
        res.json(gear);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllGears,
    createGears,
    getSingleGear,
    updateGear,
    deleteGears
}