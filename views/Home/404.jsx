const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <article className="narrow-content">
                    <h1>You seem to be a little lost, friend.</h1>
                    <p>Were you trying to find the bathroom? A way out of the Abyss or the Jungles of Chult? Maybe you were looking for a book? Either way, you didn't find what you were looking for.</p>
                    <a className="btn btn-danger" href="/">Go home</a>
                </article>
            </Default>
        )
    }
}

module.exports = New