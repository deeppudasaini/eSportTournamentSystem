const express=require('express');
const teamRouter=express.Router();
const{getAllTeams,
    createTeams,
    getSingleTeam,
    updateTeam,
    deleteTeams}=require('../controllers/Team');

    teamRouter.route('/').get(getAllTeams).post(createTeams);
    teamRouter.route('/:id').get(getSingleTeam).put(updateTeam).delete(deleteTeams);
module.exports=teamRouter;