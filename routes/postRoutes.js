const express = require('express');
const router = express.Router();

const PostCtrl = require('../controllers/posts');
const AuthHelper = require('../Helpers/AuthHelper');

router.post('/post/add-post', AuthHelper.VerifyToken, PostCtrl.AddPost);


module.exports = router;