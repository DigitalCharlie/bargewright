const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Default user={user}>
                <form action={`/users/${user.username}?_method=PUT`} method="post">
                    <fieldset>
                    <legend>Edit profile</legend>
                    <label>
                        EMAIL:<input type="text" name="email" placeholder="enter email" defaultValue={user.email} />
                    </label>
                    <label className="field-label textarea-label">Welcome Message:</label> <textarea name="welcome" defaultValue={user.welcome}></textarea>
                    </fieldset>
                    <input type="submit" value="Update User" />
                </form>
            </Default>
        )
    }
}

module.exports = New