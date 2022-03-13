const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const { character } = this.props;
        console.log(character)
        const money = character.adventures.reduce((gold, {goldChange}) => gold + goldChange, 0)
        console.log(money)

        return (
            <Default user={character.player}>
                <h1>{character.name} the {character.race} {character.class}</h1>
                <p><a href={`/users/${character.player}/characters/${character._id}/adventures/new`}>Log new adventure</a></p>
                <hr />
                <h3>Adventures</h3>
                {
                    character.adventures.map((adventure, index) => (
                        <article>
                                <p>
                                    <a href={`/users/${character.player}/characters/${character._id}/adventures/${index}`}>
                                        {adventure.name}
                                    </a>
                                </p>
                        </article>
                    ))
                }
                <hr />
                <p><a href={`/users/${character.player}/characters/${character._id}/edit`}>Edit {character.name}</a></p>
                <form action={`/users/${character.player}/characters/${character._id}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete ${character.name}`}/>
                </form>
                <p><a href={`/users/${character.player}`}>Back to your characters</a></p>
            </Default>
        )
    }
}

module.exports = Index