const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { error } = this.props
        return (
            <Default>
                <article className="narrow-content">
                    <h1>Remind me, what's your name again?</h1>
                    <p className="error">{error}</p>
                    <form action="/login" method="post">
                        <input type="text" name="username" placeholder="username" /><br />
                        <input type="password" name="password" placeholder="password" /><br />
                        <input type="submit" className="btn btn-danger" value="Log in" />
                    </form>
                    <p className="tiny-text"><a href="/new">Register</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New