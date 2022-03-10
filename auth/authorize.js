const auth = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) return res.status(401).send(`Where's your token? Go login.`)

    if (res.cookie.user === req.params.username) {
        next()
    } else {
        res.send('Your token says you are ' + res.cookie.user + '. That is not ' + req.params.username+ ', which is whose page you requested. Tsk tsk.')
    }
}

module.exports = auth