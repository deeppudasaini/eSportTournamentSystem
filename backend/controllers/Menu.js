const Menu=require('../models/Menu');
const getAllMenus=async (req,res)=>{
    const menus=await Menu.find().then(menus=>{
        res.json(menus);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createMenus=async (req,res)=>{
    
    const menu=await Menu.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({menu});
}
const getSingleMenu=async (req,res)=>{
    const menu=await Menu.findById(req.params.menuId).then(menu=>{
        res.json(menu);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateMenu=async (req,res)=>{
    const menu=await Menu.findByIdAndUpdate(req.params.menuId,req.body,{new:true}).then(menu=>{
        res.json(menu);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteMenus=async (req,res)=>{
    const menu= await Menu.findByIdAndDelete(req.params.menuId).then(menu=>{
        res.json(menu);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllMenus,
    createMenus,
    getSingleMenu,
    updateMenu,
    deleteMenus
}