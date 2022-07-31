const mongoose = require('mongoose');
const todoListSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true 
    },
    type:{
        type:String,
        required:true 
    }
})
console.log("schema is loaded")
// When ever we are naming of collection we use capital 
const Todo = mongoose.model('Todo' , todoListSchema);
console.log("schema is loaded")
module.exports  = Todo