const express = require('express')

const expressSession=require('express-session');

const passport = require('passport');
require('./config/passport')(passport);
require('dotenv').config()

const connectDb=require('./db/connect.js')

const app = express()



// DB config


app.use(express.urlencoded({extended: false}))

app.use(expressSession({
    secret:'hello',
    resave:true,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());


//route
app.use(express.json());
app.use('/api/users',require('./routes/users'));
app.use('/api/gears',require('./routes/gear'));
app.use('/api/categories',require('./routes/category'));
app.use('/api/menus',require('./routes/menu'));
app.use('/api/roles',require('./routes/role'));
app.use('/api/results',require('./routes/result'));
app.use('/api/posts',require('./routes/post'));
app.use('/api/teams',require('./routes/team'));
app.use('/api/tournaments',require('./routes/tournament'));

const port=5000;
const dbUri = require('./config/keys').mongoURI
//Global

const start=async()=>{
    try{
        await connectDb(dbUri);
        app.listen(port,()=>{
            console.log(`Server started on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
};
start();