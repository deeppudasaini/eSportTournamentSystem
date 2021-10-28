const express=require('express');
const categoryRouter=express.Router();
const {checkAuthenticated,afterAuthenticated} = require('../config/auth');
const{getAllCategorys,
    createCategorys,
    getSingleCategory,
    updateCategory,
    deleteCategorys}=require('../controllers/Category');

    categoryRouter.route('/',checkAuthenticated).get(getAllCategorys).post(createCategorys);
    categoryRouter.route('/:id').get(getSingleCategory).put(updateCategory).delete(deleteCategorys);
module.exports=categoryRouter;