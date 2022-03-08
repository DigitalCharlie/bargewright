const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) return res.status(401).send(`Where's your token? Go login.`)

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        console.log(jwt.decode(token).username)
        next()
    } catch (err) {
        res.status(400).send(`You can't access this page.`)
    }
}

module.exports = auth