const express=require('express');
const {afterAuthenticated,checkAuthenticated}=require('../config/auth')
const tournamentRouter=express.Router();
const{getAllTournaments,
    createTournaments,
    getSingleTournament,
    updateTournament,
    deleteTournaments}=require('../controllers/Tournament');

    tournamentRouter.route('/').get(getAllTournaments).post(createTournaments);
    tournamentRouter.route('/:id').get(getSingleTournament).put(updateTournament).delete(deleteTournaments);
module.exports=tournamentRouter;