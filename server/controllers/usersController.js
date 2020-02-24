const path = require('path');
const db = require('../models/userModels.js');

const usersController = {};

//middleware invoked at /login to validate user
usersController.validateUser = (req,res,next) => {
  try {
    const {username, password} = req.body;
    console.log('in usersController.validateUser, un + pw', username, password)

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
usersController.matchUsers = async (req, res, next) => {
    console.log('userController.matchUsers');
    try {
        
      //query
      const q = 'SELECT users.username, interests.interest_name, schools.name as school, users._id as user_id ' +
      'FROM users LEFT OUTER JOIN interests ON interests.user_id = users._id LEFT OUTER JOIN schools ' +
      'on schools.user_id = users._id WHERE NOT users._id = $1 AND ' +
      'interests.interest_name = $2 AND schools.name = $3 LIMIT 6';
      const values = ['1', 'math', 'UCLA']; //HARDCODED FOR NOW

      db.query(q, values)
      .then((data) => {
        console.log(data);
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
      const {
        firstname,
        lastname,
        username,
        password,
        email,
        school,
        interests
      } = req.body;
      const q =
        "INSERT INTO users(first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING _id";
      const values = [firstname, lastname, email, username, password];
      
      //insert new user into table
      const getIdQuery = await db.query(q, values);
      const newUserId = getIdQuery.rows[0]._id;

      console.log('new user id', newUserId);

      const q2 = "INSERT INTO schools(name, location_x, location_y, user_id) VALUES($1, $2, $3, $4)";
      const val2 = [school, '122.45', '134.56', newUserId];

      const queryTwo = await db.query(q2, val2);

      console.log('interests array', interests);

      //loop through interests array to insert all the interests
      for (let i = 0; i < interests.length; i++) {

        let q3 = "INSERT INTO interests(interest_name, user_id) VALUES($1, $2)";
        let val3 = [interests[i], newUserId];
        const queryThree = await db.query(q3, val3);
      }
      return next();
    } catch (err) {
      return next({
        log: `usersController.addUser: ERROR: ${err}`,
        message: {
          err: "usersController.addUser: ERROR: Check server adds new user"
        }
      });
    }
  };

  module.exports = usersController;