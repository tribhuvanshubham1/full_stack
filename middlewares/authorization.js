
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authorize = async (req, res, next)=> {
    let authorization = req.headers.authorization;
    let token = authorization && authorization.split(' ').pop();
    try {
        if(!token) {
            return  res.send({
                success: false,
                message: 'Login first'
            })
        }
        
        jwt.verify(token, process.env.JWT_CLIENT_SECRET, async (err, user)=> {
            if(err){
                return res.send({
                    success: false,
                    message: err.message
                })
            }
            let userData = await User.findOne({ _id: user._id});
            if(!userData){
                return res.send({
                    success: false,
                    message: 'Invalid Token'
                })
            }
            req.user = user;
            next();
        })
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}

module.exports = authorize;