const React = require('react')
// const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/" method="post">
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
                        LEVEL:<input type="text" name="level" placeholder="character level" defaultValue="1" />
                    </label>
                    </fieldset>
                    <input type="submit" value="create new character" />
                </form>
            </div>
        )
    }
}

module.exports = New