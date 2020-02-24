const path = require('path');
const db = require('../models/userModels.js');

const usersController = {};


//middleware invoked at /login to validate user
usersController.validateUser = (req,res,next) => {
  try {
    const {username, password} = req.body;

    //find the username and password in database
    const q = 'SELECT users.username, users.password FROM users WHERE users.username = $1 and users.password = $2';
    const values = [username, password];

    db.query(q, values)
    .then((data) => {
      if(data.rows.length == 0) { res.locals.validate = false; }
      else { res.locals.validate = true; }
      return next();
    })
  }
  catch (err) {
    return next({
      log: `usersController.validateUsers: ERROR: ${err}`,
      message: { err: 'usersController.validateUsers: ERROR: Check server logs for details' },
    });
  };
}

//middleware invoked when 

//middleware invoked when

usersController.matchUsers = async (req, res, next) => {
  console.log('userController.matchUsers');
  try {
    //query
    const q =
      'SELECT users.username, interests.interest_name, schools.name as school, users._id as user_id ' +
      'FROM users LEFT OUTER JOIN interests ON interests.user_id = users._id LEFT OUTER JOIN schools ' +
      'on schools.user_id = users._id WHERE NOT users._id = $1 AND ' +
      'interests.interest_name = $2 AND schools.name = $3 LIMIT 6';
    const values = ['1', 'Math', 'UCLA']; //HARDCODED FOR NOW

      db.query(q, values)
      .then((data) => {
        res.locals.match = data.rows;
        return next();
      })
    }
    catch (err) {
      return next({
        log: `usersController.matchUsers: ERROR: ${err}`,
        message: { err: 'usersController.matchUsers: ERROR: Check server logs for details' },
      });
    };
  };
  
  usersController.addUser = async (req, res, next) => {
    try {
      console.log('req.body in userContoller.addUser', req.body)

      return next();
    }
    catch (err) {
      return next({
        log: `usersController.matchUsers: ERROR: ${err}`,
        message: { err: 'usersController.matchUsers: ERROR: Check server logs for details' },
      });
    };
  };



module.exports = usersController;
