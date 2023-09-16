'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFond = require('./handlers/404.js');

// creates an express singleton (a single instance of express).
const app = express();

app.use(express.json());

// app.use(logger);

app.get('/', logger, (req, res, next) => {
    res.status(200).send(req.log);
});

app.use('*', notFond);

app.listen(3001, () => console.log('server is running'));
