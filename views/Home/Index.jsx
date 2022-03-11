const React = require('react')
const Default = require('../Default')


class Index extends React.Component {
    render() {
        // const { characters, user } = this.props;
        return (
            <Default>
                <p>Welcome to the Bargewright Inn.</p>
                <a href="/login">Login</a>
            </Default>
        )
    }
}

module.exports = Index