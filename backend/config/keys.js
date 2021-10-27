module.exports={
    mongoURI:`mongodb+srv://deep:${process.env.DB_PASSWORD}@cluster0.xic80.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}