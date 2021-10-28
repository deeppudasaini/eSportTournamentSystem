const express=require('express');
const menuRouter=express.Router();
const{getAllStreams,
    createStreams,
    getSingleStream,
    updateStream,
    deleteStreams}=require('../controllers/Stream');

    menuRouter.route('/').get(getAllStreams).post(createStreams);
    menuRouter.route('/:id').get(getSingleStream).put(updateStream).delete(deleteStreams);
module.exports=menuRouter;