const React = require('react')
const Default = require('../Default')


class Index extends React.Component {
    render() {
        return (
            <Default>
                <article className="narrow-content">
                    <h1>Welcome to The Bargewright Inn, adventurer!</h1>
                    <p>We look forward to hearing tales of your deeds and promise to keep accurate records of them.</p>
                    <p>If you're a first timer, take a minute to register — otherwise take a seat at your usual table.</p>
                    <a className="btn btn-light" href="/login">Login</a>
                    <a className="btn btn-danger" href="/new">Register</a>
                </article>
            </Default>
        )
    }
}

module.exports = Index