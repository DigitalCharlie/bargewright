const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <fieldset>
                    <legend>Login</legend>
                    <label>
                        USERNAME:<input type="text" name="username" placeholder="enter username" />
                    </label>
                    <label>
                        PASSWORD:<input type="text" name="password" placeholder="create password" />
                    </label>
                    </fieldset>
                    <input type="submit" value="Log in" />
                </form>
            </div>
        )
    }
}

module.exports = New