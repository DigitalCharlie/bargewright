const React = require('react')

class Index extends React.Component {
    render() {
        const { character } = this.props;
        return (
            <div>
                <h1>{character.name}</h1>
                <p>{character.name} is a {character.race} {character.class}</p>
                <form action={`/users/${character.player}/characters/${character.name}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete ${character.name}`}/>
                </form>
            </div>
        )
    }
}

module.exports = Index