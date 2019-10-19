'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const { modeOneCalculation} = require('./utils/algorithmP1');
const { modeTwoCalculation} = require('./utils/algorithmP2');


app.use(cors());

app.get('/', (req, res) => {
    res.json({foo: 'bar'});
});

// part 1
app.get('/api/v1/mode_one', modeOneCalculation);
// part 2
app.get('/api/v1/mode_two', modeTwoCalculation);

// Error handler here
// Error handler from './utils/utils'

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
