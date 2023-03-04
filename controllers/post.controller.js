
const crudController = require('./crud.controller.js');
const jwt = require('jsonwebtoken');

const update  = async (req, res, model)=> {
    let id = req.params.id;
    let post = req.body;
    try {
        let result = await model.findOneAndUpdate({ _id: id}, post );
        res.send({
            success: true,
            message: 'Post Updated Successfully'
        })
        
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}


module.exports = {
    update
}