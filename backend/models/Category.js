const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    parent_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    order:{
        type:Number,
        default:1,

    },
    name:{
        type:String,

    },
    slug:{
        type:String,
        unique:true,
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

module.exports=mongoose.model('Category',CategorySchema);