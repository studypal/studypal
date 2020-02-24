const express = require('express');
const usersController = require('../controllers/usersController.js')
const usersRouter = express.Router();

//define all the routers later
usersRouter.get('/profile', usersController.matchUsers, (req, res, next) => {
    console.log('usersRouter.get');
    return res.status(200).json(res.locals.match);
})

usersRouter.post('/adduser', usersController.addUsers, (req, res, next) => {
    console.log('usersRouter.add');
    return res.status(200).json({});
})

module.exports = usersRouter;
