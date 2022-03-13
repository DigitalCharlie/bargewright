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
                        <input type="text" name="name" placeholder="character name" required /><br />
                        <input type="text" name="race" placeholder="character race" required/><br />
                        <input type="text" name="class" placeholder="character class" required /><br />
                        <input type="number" name="level" placeholder="starting level" required/><br />
                        <input type="text" name="image" placeholder="link to character image (optional)"/><br />
                        <input className="btn btn-danger" type="submit" value="create new character" />
                    </form>
                    <p className='tiny-text'><a href={`/users/${user}`}>Back to your characters</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New