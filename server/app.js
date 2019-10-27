'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const cors = require('cors');
const path = require('path');

const {
	logErrors,
	clientErrorHandler,
	error404Handler,
	finalErrorHandler,
} = require('./utils');

const { PartOneController} = require('./controllers/PartOneController');
const { PartTwoController} = require('./controllers/PartTwoController');

app.use(bodyParser.json());
app.use(morgan(':date[clf] :remote-addr, :referrer, :url :response-time ms', {
  stream: fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flags:'a'})
}));
app.use(cors());

app.get('/', (req, res) => {
    res.json({foo: 'bar'});
});

// part 1
app.get('/api/v1/part_one', PartOneController);
// part 2
app.get('/api/v1/part_two', PartTwoController);

// Error handler here
// Error handler from './utils'
app.use(logErrors);
app.use(clientErrorHandler);
app.use(error404Handler);
app.use(finalErrorHandler);


module.exports = app;
