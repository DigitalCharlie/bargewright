const React = require('react')

class Index extends React.Component {
    render() {
        const { character } = this.props;
        return (
            <div>
                <h1>{character.name}</h1>
                <p>{character.name} is a {character.race} {character.class}</p>

                <p><a href={`/users/${character.player}/characters/${character._id}/edit`}>Edit {character.name}</a></p>
                <form action={`/users/${character.player}/characters/${character._id}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete ${character.name}`}/>
                </form>
                <p><a href={`/users/${character.player}`}>Back to your characters</a></p>
            </div>
        )
    }
}

module.exports = Index