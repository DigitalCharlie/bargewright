const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) return res.status(401).send(`Where's your token? Go login.`)

    if (res.locals.user === req.params.username) {
        next()
    } else {
        res.send(`You can't access this page.`)
    }
}

module.exports = auth