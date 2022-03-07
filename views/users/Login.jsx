const React = require('react')
// const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/users/login" method="post">
                    <fieldset>
                    <legend>Login</legend>
                    <label>
                        EMAIL:<input type="text" name="email" placeholder="enter email" />
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