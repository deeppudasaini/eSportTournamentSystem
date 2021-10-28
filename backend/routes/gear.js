const express=require('express');
const gearRouter=express.Router();
const{getAllGears,
    createGears,
    getSingleGear,
    updateGear,
    deleteGears}=require('../controllers/Gear');

    gearRouter.route('/').get(getAllGears).post(createGears);
    gearRouter.route('/:id').get(getSingleGear).put(updateGear).delete(deleteGears);
module.exports=gearRouter;