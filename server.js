'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');

// creates an express singleton (a single instance of express).
const app = express();

app.use(express.json());

// app.use(logger);

app.get('/', logger, (req, res, next) => {
    res.status(200).send(req.log);
});

app.use('*', (req, res, next) => {
    res.status(404).send({
        error: 404,
        route: req.baseUrl,
        message: 'Not Found',
    });
});

app.listen(3001, () => console.log('server is running'));
