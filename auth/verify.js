const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) {
        res.cookie.user = null
        return res.status(401).send(`Nope, you can't come in.`)
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        res.cookie.user = jwt.decode(token).username
        next()

    } catch (err) {
        res.cookie.user = null
        res.status(400).send( token + 'is an invalid token')
    }
}

module.exports = verify