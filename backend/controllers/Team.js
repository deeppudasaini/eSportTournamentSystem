const Team=require('../models/Team');
const getAllTeams=async (req,res)=>{
    const teams=await Team.find().then(teams=>{
        res.json(teams);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createTeams=async (req,res)=>{
    
    const team=await Team.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({team});
}
const getSingleTeam=async (req,res)=>{
    const team=await Team.findById(req.params.teamId).then(team=>{
        res.json(team);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateTeam=async (req,res)=>{
    const team=await Team.findByIdAndUpdate(req.params.teamId,req.body,{new:true}).then(team=>{
        res.json(team);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteTeams=async (req,res)=>{
    const team= await Team.findByIdAndDelete(req.params.teamId).then(team=>{
        res.json(team);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllTeams,
    createTeams,
    getSingleTeam,
    updateTeam,
    deleteTeams
}