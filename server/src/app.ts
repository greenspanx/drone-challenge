import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

import cors from 'cors';
import path from 'path';

const app = express();

import {
	logErrors,
	clientErrorHandler,
	error404Handler,
	finalErrorHandler,
} from './utils';

import Controller from './controllers/Controller';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// log access data 
app.use(morgan(':date[clf] :remote-addr, :referrer, :url :response-time ms', {
  stream: fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flags:'a'})
}));
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({foo: 'bar'});
});

// part 1 and part 2
// app.post('/api/v1/drone', Controller);

// Error handler here
// Error handler from './utils'
app.use(logErrors);
app.use(clientErrorHandler);
app.use(error404Handler);
app.use(finalErrorHandler);


export default app;
