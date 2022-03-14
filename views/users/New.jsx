const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { error } = this.props
        return (
            <Default>
                <article className="narrow-content">
                    <h1>So. Who are you, exactly?</h1>
                    <p className="error">{error}</p>
                    <form action="/" method="post">
                            <input type="text" name="username" placeholder="username" /><br />
                            <input type="text" name="email" placeholder="email" /><br />
                            <input type="password" name="password" placeholder="password" /><br />
                            <input type="submit" className="btn btn-danger" value="Register" />
                    </form>
                    <p className="tiny-text"><a href="/login">Login</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New