const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { character } = this.props
        return (
            <Default user={character.player}>
                <article className="narrow-content">
                    <h1>Edit {character.name}</h1>
                    <form action={`/users/${character.player}`} method="post">
                        <label className="field-label">Character name</label> <br />
                        <input type="text" name="name" defaultValue={character.name}/><br />
                        <label className="field-label">Race</label> <br />
                        <input type="text" name="race" defaultValue={character.race} /><br />
                        <label className="field-label">Class</label> <br />
                        <input type="text" name="class" defaultValue={character.class} /><br />
                        <label className="field-label">Level</label> <br />
                        <input type="number" name="level" defaultValue={character.level}/><br /><br />
                        <input className="btn btn-danger" type="submit" value="update character" />
                    </form>
                    <p className="tiny-text"><a href={`/users/${character.player}/characters/${character._id}`}>Back</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New