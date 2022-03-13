const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Default user={user}>
                <form action={`/users/${user}`} method="post">
                    <fieldset>
                    <legend>Create a New Character</legend>
                    <label>
                        NAME:<input type="text" name="name" placeholder="enter character name" />
                    </label>
                    <label>
                        RACE:<input type="text" name="race" placeholder="enter character race" />
                    </label>
                    <label>
                        CLASS:<input type="text" name="class" placeholder="enter character class" />
                    </label>
                    <label>
                        LEVEL:<input type="number" name="level" placeholder="character level" defaultValue="1" />
                    </label>
                    </fieldset>
                    <input type="submit" value="create new character" />
                </form>
            </Default>
        )
    }
}

module.exports = New