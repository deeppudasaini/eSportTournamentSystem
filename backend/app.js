const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const expressSession=require('express-session');
const flash=require('connect-flash');
const passport = require('passport');
require('./config/passport')(passport);
require('dotenv').config()

const connectDb=require('./db/connect.js')

const app = express()

//ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')

// DB config


app.use(express.urlencoded({extended: false}))

app.use(expressSession({
    secret:'hello',
    resave:true,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

//route
app.use(express.json());
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))
const port=5000;
const dbUri = require('./config/keys').mongoURI
//Global
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg')
    res.locals.error_msg=req.flash('error_msg')
    res.locals.error=req.flash('error')
    next()
})
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