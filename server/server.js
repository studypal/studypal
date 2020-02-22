const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json()); // needed to be able read the body

//require routers here
const apiRouter = require('../server/routes/api');
const usersRouter = require('../server/routes/users');
const msgRouter = require('../server/routes/msgs');
//TODO

// route handler to respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

//define route handlers
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/msg', msgRouter);
