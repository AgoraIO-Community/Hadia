'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const page = require('./routes/page');
const user = require('./routes/user');
const agent = require('./routes/agent');
const call = require('./routes/call');

const app = express();

if (app.get('env') === 'development') {
  require('dotenv').config();
  mongoose.set('debug', true);
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/hadia');

mongoose.connection.on('connected', () => {
  console.log('Connected to Hadia remote DB');
});

mongoose.connection.on('error', (err) => {
  console.log('Hadia DB error: ' + err);
});

const port = process.env.PORT || 3200;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/page', page);
app.use('/user', user);
app.use('/agent', agent);
app.use('/call', call);

app.get('/', (req, res, next) => {
  res.send('Welcome to Hadia backend server');
});

app.listen(port, () => {
  console.log('Hadia server listening on port ', port);
});
