'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');

// creates an express singleton (a single instance of express).
const app = express();

app.use(express.json());

app.use(logger);

app.use('/', (req, res, next) => {
    res.status(200).send('Hello World!');
});

app.listen(3001, () => console.log('server is running'));
