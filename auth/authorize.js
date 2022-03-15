const auth = (req, res, next) => {
    const token = req.cookies['auth-token']
    if(!token) return res.status(401).send(`Where's your token? Go login.`)

    if (res.cookie.user === req.params.username) {
        next()
    } else {
        res.redirect(`/`)
    }
}

module.exports = auth