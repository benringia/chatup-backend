const httpStatus = require('http-status-codes');

const User = require('../models/userModels');
// const { json } = require('express');

module.exports = {
    async GetAllUsers(req, res) {
        await User.find({})
            .populate('posts.postId')
            .populate('following.userFollowed')
            .populate('followers.follower')
            .populate('chatList.receiverId')
            .populate('chatList.msgId')
            .populate('notifications.senderId')
            .then(result => {
                res.status(httpStatus.OK).json({message: 'All users', result});
            }).catch(err => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error occured'});
            });
    },

    async GetUser(req, res) {
        await User.findOne({_id:req.params.id})
            .populate('posts.postId')
            .populate('following.userFollowed')
            .populate('followers.follower')
            .populate('chatList.receiverId')
            .populate('chatList.msgId')
            .populate('notifications.senderId')
            .then(result => {
                res.status(httpStatus.OK).json({message: 'User By ID', result});
            }).catch(err => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error occured'});
            });
    },

    async GetUserByName(req, res) {
        await User.findOne({ username: req.params.username })
          .populate('posts.postId')
          .populate('following.userFollowed')
          .populate('followers.follower')
          .populate('chatList.receiverId')
          .populate('chatList.msgId')
          .populate('notifications.senderId')
          .then(result => {
            res.status(httpStatus.OK).json({ message: 'User by username', result });
          })
          .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err });
          });
      }
};