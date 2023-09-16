'use strict';

module.exports = (err, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.query,
        body: req.body,
        message: `Server Error: ${err}`,
    });
}