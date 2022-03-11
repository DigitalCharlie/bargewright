const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Default>
                <form action={`/users/${user.username}?_method=PUT`} method="post">
                    <fieldset>
                    <legend>Create a New User</legend>
                    <label>
                        EMAIL:<input type="text" name="email" placeholder="enter email" defaultValue={user.email} />
                    </label>
                    </fieldset>
                    <input type="submit" value="Update User" />
                </form>
            </Default>
        )
    }
}

module.exports = New