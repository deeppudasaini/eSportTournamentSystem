const express=require('express');
const tournamentRouter=express.Router();
const{getAllTournaments,
    createTournaments,
    getSingleTournament,
    updateTournament,
    deleteTournaments}=require('../controllers/Tournament');

    tournamentRouter.route('/').get(getAllTournaments).post(createTournaments);
    tournamentRouter.route('/:id').get(getSingleTournament).put(updateTournament).delete(deleteTournaments);
module.exports=tournamentRouter;