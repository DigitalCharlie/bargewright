const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { character } = this.props
        return (
            <Default user={character.player}>
                <article className="narrow-content">
                    <h1>Edit {character.name}</h1>
                    <form action={`/users/${character.player}/characters/${character._id}?_method=PUT`} method="post">
                        <label className="field-label">Character name</label> <br />
                        <input type="text" name="name" defaultValue={character.name} required/><br />
                        <label className="field-label">Race</label> <br />
                        <input type="text" name="race" defaultValue={character.race} required/><br />
                        <label className="field-label">Class</label> <br />
                        <input type="text" name="class" defaultValue={character.class} required/><br />
                        <label className="field-label">Level</label> <br />
                        <input type="number" name="level" defaultValue={character.level} required/><br />
                        <label className="field-label">Link to Character Image</label> <br />
                        <input type="text" name="image" defaultValue={character.image} /><br />
                        <label className="field-label textarea-label">Additional character notes</label> <br />
                        <textarea name="notes"></textarea><br /><br />
                        <input className="btn btn-danger" type="submit" value="update character" />
                    </form>
                    <hr />
                    <h3>DANGER ZONE</h3>
                    <form action={`/users/${character.player}/characters/${character._id}?_method=DELETE`} method="POST">
                        <input className="btn btn-danger" type="submit" value={`Delete ${character.name}`}/>
                    </form>
                    <p className="tiny-text"><a href={`/users/${character.player}/characters/${character._id}`}>Back</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New