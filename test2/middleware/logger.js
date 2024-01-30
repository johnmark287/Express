const moment = require('moment')

// Middleware function 
const logger = (req, res, next) => {
    // Getss the whole url tapped and date
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}:
        ${moment().format()}`);
    next();
}

module.exports = logger
