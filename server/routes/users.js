const express = require('express');
const usersController = require('../controllers/usersController.js')
const usersRouter = express.Router();

//define all the routers later
usersRouter.get('/', usersController.matchUsers, (req, res, next) => {
    console.log('usersRouter.get');
    return res.status(200).json(res.locals.match);
})

module.exports = usersRouter;
