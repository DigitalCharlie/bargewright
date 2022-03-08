const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.cookies['auth-token']
    console.log(token)
    if(!token) return res.status(401).send(`Nope, you can't come in.`)

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send( token + 'is an invalid token')
    }
}

module.exports = auth