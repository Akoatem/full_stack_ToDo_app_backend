const toDoModel = require('../models/toDoModel')

// get item
module.exports.getToDo = async (req, res) =>{
    try {
        const toDo = await toDoModel.find()
        res.send(toDo)
    } catch (error) {
        console.log(error);   
    }

}

//add items
module.exports.saveToDo = async (req, res) => {
    const {text } = req.body
    toDoModel
        .create({text})
        .then((data) =>{
            console.log("Added Successfully");
            console.log(data);
            res.send(data)
    })
}

// update items

module.exports.updateToDo = async (req, res) =>{
    const {_id, text } = req.body
    toDoModel
       .findByIdAndUpdate(_id,{text})
       .then(() => res.send("Update Sucessfully"))
       .catch((err) => console.log(err))
}

// delete items

module.exports.deleteToDo = async (req, res) =>{
    const {_id} = req.body
    toDoModel
       .findByIdAndDelete(_id)
       .then(() => res.send("Deleted Sucessfully"))
       .catch((err) => console.log(err))
}