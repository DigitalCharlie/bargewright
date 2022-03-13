const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) {
        res.render(`users/Login`, {error:`Please log in`})
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        res.cookie.user = jwt.decode(token).username
        next()

    } catch (err) {
        res.render(`users/Login`, {error: 'Your token is invalid. Please log in again.'})
    }
}

module.exports = verify