const mongoose=require('mongoose');
const RoleSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
    name:{
        type:String,
    },
    display_name:{
        type:String,
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

module.exports=mongoose.model('Role',RoleSchema);