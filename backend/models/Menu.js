const mongoose=require('mongoose');
const MenuSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
    
    name:{
        type:String,
        unique:true
    },
    
    created_at:{
        type:Date,
        default:Date.now,
    },
    updated_at:{
        type:Date,
        default:Date.now,
    },

})

module.exports=mongoose.model('Menu',MenuSchema);