const Tournament=require('../models/Tournament');
const getAllTournaments=async (req,res)=>{
    const tournaments=await Tournament.find().then(tournaments=>{
        res.json(tournaments);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createTournaments=async (req,res)=>{
    
    const tournament=await Tournament.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({tournament});
}
const getSingleTournament=async (req,res)=>{
    const tournament=await Tournament.findById(req.params.tournamentId).then(tournament=>{
        res.json(tournament);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateTournament=async (req,res)=>{
    const tournament=await Tournament.findByIdAndUpdate(req.params.tournamentId,req.body,{new:true}).then(tournament=>{
        res.json(tournament);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteTournaments=async (req,res)=>{
    const tournament= await Tournament.findByIdAndDelete(req.params.tournamentId).then(tournament=>{
        res.json(tournament);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllTournaments,
    createTournaments,
    getSingleTournament,
    updateTournament,
    deleteTournaments
}