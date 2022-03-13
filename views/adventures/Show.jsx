const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const { character, advNum } = this.props;
        return (
            <Default user={character.player}>
                <h1>Adventurer's Log</h1>
                <p>
                    Adventure title: {character.adventures[advNum].name}
                </p>
                <hr />
                <p><a href={`/users/${character.player}/characters/${character._id}/adventures/${advNum}/edit`} id="myButton">Edit adventure</a></p>
                <form action={`/users/${character.player}/characters/${character._id}/adventures/${advNum}?_method=PUT`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete this adventure log`}/>
                </form>
                <p className='tiny-text'><a href={`/users/${character.player}/characters/${character._id}`}>Back to {character.name}</a></p>
            </Default>
        )
    }
}

module.exports = Index