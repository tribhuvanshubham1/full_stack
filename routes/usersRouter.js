const { Router } = require('express');
const User = require('../models/user.model');
const { register, login } = require('../controllers/user.controller');
const router = Router();
router.post('/register', async (req, res)=> {
    register(req, res, User);
}) 
router.post('/login', async (req, res)=> {
    login(req, res, User);
})
module.exports = router;