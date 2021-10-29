const express=require('express');
const roleRouter=express.Router();
const{
    getAllRoles,
    createRoles,
    getSingleRole,
    updateRole,
    deleteRoles}=require('../controllers/Role');

    roleRouter.route('/').get(getAllRoles).post(createRoles);
    roleRouter.route('/:id').get(getSingleRole).put(updateRole).delete(deleteRoles);
module.exports=roleRouter;