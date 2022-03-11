const React = require('react')
// const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        const { character } = this.props
        return (
            <div>
                <form action={`/users/${character.player}/characters/${character._id}?_method=PUT`} method="POST">
                    <fieldset>
                    <legend>Create a New Character</legend>
                    <label>
                        NAME:<input type="text" name="name" defaultValue={character.name} />
                    </label>
                    <label>
                        RACE:<input type="text" name="race" defaultValue={character.race} />
                    </label>
                    <label>
                        CLASS:<input type="text" name="class" defaultValue={character.class} />
                    </label>
                    <label>
                        LEVEL:<input type="text" name="level" placeholder="character level" defaultValue={character.level} />
                    </label>
                    </fieldset>
                    <input type="submit" value={`update ${character.name}`}/>
                </form>
            </div>
        )
    }
}

module.exports = New