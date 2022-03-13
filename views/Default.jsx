const React = require('react')

class Default extends React.Component {
    render () {
        const user = this.props.user
        let navLink = ''
        // Set nav options based on whether it's a logged in page
        if (user) {
            navLink = <ul className="navbar-nav mr-auto"><li className="nav-item"><a className="nav-link"  href={`/users/${user}`}>My Account</a></li><li className="nav-item"><a className="nav-link" href="/logout">Logout</a></li></ul>
        } else {
            navLink =
            <ul class="navbar-nav mr-auto">
                    <form action="/login" method="post" className="form-inline my-2 my-lg-0">
                            <input type="text" name="username" placeholder="username" className='nav-login-input' />
                            <input type="password" name="password" placeholder="password" className='nav-login-input' />
                            <input class="btn btn-sm btn-primary" type="submit" value="Log in" />
                    </form>
                    <li className="nav-item"><a className="nav-link" href="/new/">Register</a></li>
                </ul>
        }
        return (
            <html>
                <head>
                    <title>The Bargewright Inn</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/style.css" type="text/css"/> 
                </head>
                <body>
                    <header>
                        <div className="container">
                            <nav className="navbar navbar-expand-md justify-content-between navbar-dark">
                                <a className="navbar-brand" href="/"><img src="/images/bargewright-logo.png" alt="The Bargewright Inn logo" className="site-logo"/></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="collapsingNav">
                                    
                                        {navLink}
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div id="bg">
                        <div className="container main-content">
                            {this.props.children}
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <p>The Bargewright Inn bears no responsibility for any collisions that may occur as a result of charging headlong into battle after too many pints of Dragondew, Firedrake or Evermead. Do not blame The Bargewright Inn for any squabbles that occur as a result of a DM checking your logs. Despite the record keeping service offered by the Inn, however, the Inn hopes that any DM who does check logs of a player is tossed into the gaping maw of Dendar the night serpent. Unless, of course, that player is rude and disruptive, in which case, may Tyr bless you.</p>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default