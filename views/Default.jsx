const React = require('react')

class Default extends React.Component {
    render () {
        const user = this.props.user
        const cookie = this.props.cookie
        let navLink = ''
        // Set nav options based on whether it's a logged in page
        if (user) {
            navLink = <div><a href={`/users/${user}`}>My Account</a><a href="/logout">Logout</a></div>
        } else {
            navLink =
                <form action="/login" method="post" className="form-inline my-2 my-lg-0">
                        <input type="text" name="username" placeholder="username" className='nav-login-input' />
                        <input type="password" name="password" placeholder="password" className='nav-login-input' />
                        <input type="submit" value="Log in" />
                </form>
        }
        return (
            <html>
                <head>
                    <title>The Bargewright Inn</title>
                    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;800&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/style.css" type="text/css"/> 
                </head>
                <body>
                    <header>
                        <div className="container">
                            <nav className="navbar navbar-expand-md justify-content-between">
                                <a className="navbar-brand" href="/"><img src="/images/bargewright-logo.png" alt="The Bargewright Inn logo" className="site-logo"/></a>
                                <div class="collapse navbar-collapse justify-content-end">
                                    <a href="/about">About</a>
                                    {navLink}
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div className="container">
                        {this.props.children}
                    </div>
                    <footer>
                        <div className="container">
                            <p>Disclaimer text that is funny.</p>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default