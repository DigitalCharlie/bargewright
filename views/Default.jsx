const React = require('react')

class Default extends React.Component {
    render () {
        // const loginLink can be defined here
        return (
            <html>
                <head>
                    <title>The Bargewright Inn</title>
                    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;800&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/style.css" /> 
                </head>
                <body>
                    <div className="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default