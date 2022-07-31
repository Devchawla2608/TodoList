const Todo = require('../models/todoList')



module.exports.home = function(req ,res){

    Todo.find({} , function(err , todoList){
        if(err){
            console.log("There is error in find",err);
            return;
        }
        return res.render('index' , {
            title:"TODO LIST",
            todo_list:todoList
        })
    })
}
module.exports.create = function(req ,res){
    Todo.create({
        description  : req.body.description,
        date:req.body.date,
        type:req.body.type
    } , function(err , sechdule){
        if(err){
            console.log("There is an error",err);
            return
        }
        console.log(sechdule)
        return res.redirect('back')
    })
}

module.exports.destroy = function(req ,res){
    console.log("I am In destroy function")
    Todo.findById(req.params.id , function(err , sechdule){
        if(err){
            console.log("There is an error ",err);
            return
        }
        sechdule.remove()
        return res.redirect('back')
    })
}