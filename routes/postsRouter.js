const { Router } = require('express');
const User = require('../models/user.model');
const Post = require('../models/post.model');
const crudController = require('../controllers/crud.controller');
const authorize = require('../middlewares/authorization');
const { update, remove } = require('../controllers/post.controller');
const router = Router();
router.get('/', authorize, async (req, res)=> {
    try {
        let posts = await Post.find({ _id: req.user._id});
        res.send({
            success: true,
            posts
        })
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        })
    }
})

router.post('/', authorize, async (req, res)=> {
    let post = req.body;
    post.author_id = req.user._id;
    req.body = post;
    crudController(Post).post(req, res);
})

router.patch('/update/:id', authorize, async (req, res)=> {
    update(req, res, Post);
})

router.delete('/delete/:id', authorize, async (req, res)=> {
    crudController(Post).remove(req, res);
})

module.exports = router;