const mongoose = require("mongoose");

const DATABASE= "mongodb+srv://vamsi:vamsi@cluster0-3rh9c.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(DATABASE)
.then( ()=>{
    console.log("DB connected")
})
.catch( ()=>{
    console.log("DB not connected");

})
