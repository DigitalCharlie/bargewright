const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Default user={user}>
                <article className="narrow-content">
                    <h1>Create a new character</h1>
                    <form action={`/users/${user}`} method="post">
                        <input type="text" name="name" placeholder="character name" /><br />
                        <input type="text" name="race" placeholder="character race" /><br />
                        <input type="text" name="class" placeholder="character class" /><br />
                        <input type="number" name="level" placeholder="starting level"/><br />
                        <input className="btn btn-danger" type="submit" value="create new character" />
                    </form>
                </article>
            </Default>
        )
    }
}

module.exports = New