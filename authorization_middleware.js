function checkAuthorization(req, res, next) {
    const authorization = req.header('Authorization');
    if (authorization === 'Bearer ZEWAIL') {
        next();
    } else {
        res.status(403).send('Unauthorized');
    }
}

module.exports = checkAuthorization;
