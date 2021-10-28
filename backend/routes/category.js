const express=require('express');
const categoryRouter=express.Router();
const{getAllCategorys,
    createCategorys,
    getSingleCategory,
    updateCategory,
    deleteCategorys}=require('../controllers/Category');

    categoryRouter.route('/').get(getAllCategorys).post(createCategorys);
    categoryRouter.route('/:id').get(getSingleCategory).put(updateCategory).delete(deleteCategorys);
module.exports=categoryRouter;