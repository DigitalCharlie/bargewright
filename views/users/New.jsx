const React = require('react')
// const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/users" method="post">
                    <fieldset>
                    <legend>Create a New User</legend>
                    <label>
                        NAME:<input type="text" name="name" placeholder="enter user name" />
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
            </div>
        )
    }
}

module.exports = New