const express=require('express');
const menuRouter=express.Router();
const{getAllMenus,
    createMenus,
    getSingleMenu,
    updateMenu,
    deleteMenus}=require('../controllers/Menu');

    menuRouter.route('/').get(getAllMenus).post(createMenus);
    menuRouter.route('/:id').get(getSingleMenu).put(updateMenu).delete(deleteMenus);
module.exports=menuRouter;