'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFond = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

// creates an express singleton (a single instance of express).
const app = express();

app.use(express.json());

// app.use(logger);

app.get('/', logger, (req, res, next) => {
    res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
    next('We have an error');
});

app.use('*', notFond);
app.use(errorHandler);

const start = () => {
    app.listen(3001, () => console.log('server is running'));
}

module.exports = { start, app };

