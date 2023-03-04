
const get = (model) => async (req, res)=> {
    try {
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}

const post = (model) => async (req, res)=> {
    try {
        let result = await model.create(req.body);
        res.send({
            success: true,
            message: 'Data posted successfully',
            data: result
        })
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}

const remove = (model) => async (req, res)=> {
    let id = req.params.id;
    try {
        let result = await model.findOneAndDelete({ _id: id});
        res.send({
            success: true,
            message: 'Data deleted successfully',
            data: result
        })
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}

module.exports = (model)=> {
    return {
        get: get(model),
        post: post(model),
        remove: remove(model)
    }
}