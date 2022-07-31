const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Todo = require('./models/todoList')
const app = express();

var todoList = [
    {
    description:"My name is khan",
    date:"12 aug 2020",
    type:"professional"
    },
    {
        description:"My name is khan",
        date:"12 aug 2020",
        type:"professional"
    },
    {
        description:"My name is khan",
        date:"12 aug 2020",
        type:"professional"
    }
]


app.set('view engine' , "ejs");
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));


app.get('/' , function(req , res){
    return res.render('index', {
        title:"MY TODO LIST",
        todo_list:todoList
    });
})

app.post('/create' , function(req , res){
    Todo.create({
        description:req.body.description,
        date:req.body.date,
        type:req.body.type
    } , function(err , newTodo){
        if(err){
            console.log("Error in creating a contact")
            return
        }
        console.log('*******' , newTodo);
        return res.redirect('back');
    });
});
app.listen(port , function(err){
    if(err){
        console.log("Error" , err);
        return;
    }
    console.log("Your server is running on port",port);
})
