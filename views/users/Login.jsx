const res = require('express/lib/response')
const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        // const { error } = this.props
        return (
            <Default>
                {/* <p>{error}</p> */}
                <form action="/login" method="post">
                    <fieldset>
                    <legend>Login</legend>
                    <label>
                        USERNAME:<input type="text" name="username" placeholder="enter username" />
                    </label>
                    <label>
                        PASSWORD:<input type="password" name="password" placeholder="enter password" />
                    </label>
                    </fieldset>
                    <input type="submit" value="Log in" />
                </form>
            </Default>
        )
    }
}

module.exports = New