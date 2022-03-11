const React = require('react')

class Default extends React.Component {
    render () {
        const user = this.props.user
        let navLink = ''
        if (user) {
            navLink = <div class="collapse navbar-collapse justify-content-end"><a href="/about">About</a><a href={`/users/${user}`}>My Account</a><a href="/logout">Logout</a></div>
        } else {
            navLink =   <div class="collapse navbar-collapse justify-content-end">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
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
                                {navLink}
                            </nav>
                        </div>
                    </header>
                    <div className="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default