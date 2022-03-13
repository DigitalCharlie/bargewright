const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Default user={user}>
                <article className="narrow-content">
                    <form action={`/users/${user.username}?_method=PUT`} method="post">
                        <h1>Looking to change it up, are we?</h1>
                            <label className="field-label">Email address</label> <br />
                            <input className="edit-input" type="text" name="email" placeholder="enter email" defaultValue={user.email} /><br />
                            <label className="field-label textarea-label">Welcome Message</label> <br />
                            <textarea className="edit-input" name="welcome" defaultValue={user.welcome}></textarea><br />
                            <input className="edit-input btn btn-danger" type="submit" value="Update User" />
                    </form>
                </article>
            </Default>
        )
    }
}

module.exports = New