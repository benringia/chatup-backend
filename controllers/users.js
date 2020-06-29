const httpStatus = require('http-status-codes');

const User = require('../models/userModels');
// const { json } = require('express');

module.exports = {
    async GetAllUsers(req, res) {
        await User.find({})
            .populate('posts.postId')
            .then(result => {
                res.status(httpStatus.OK).json({message: 'All users', result});
            }).catch(err => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error occured'});
            });
    }
};