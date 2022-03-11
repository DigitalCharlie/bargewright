const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <form action="/" method="post">
                    <fieldset>
                    <legend>Create a New User</legend>
                    <label>
                        USERNAME:<input type="text" name="username" placeholder="enter user name" />
                    </label>
                    <label>
                        EMAIL:<input type="text" name="email" placeholder="enter email" />
                    </label>
                    <label>
                        PASSWORD:<input type="text" name="password" placeholder="create password" />
                    </label>
                    </fieldset>
                    <input type="submit" value="create New User" />
                </form>
            </Default>
        )
    }
}

module.exports = New