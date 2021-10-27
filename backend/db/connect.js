

const mongoose =require('mongoose');



const connectDb=(url)=>{
    console.log("Mongo Db Connected .....")
return mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true,
    
});
}

module.exports=connectDb;