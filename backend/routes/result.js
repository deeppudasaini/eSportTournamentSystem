const express=require('express');
const resultRouter=express.Router();
const{getAllResults,
    createResults,
    getSingleResult,
    updateResult,
    deleteResults}=require('../controllers/Result');

    resultRouter.route('/').get(getAllResults).post(createResults);
    resultRouter.route('/:id').get(getSingleResult).put(updateResult).delete(deleteResults);
module.exports=resultRouter;