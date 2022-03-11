const React = require('react')

class Index extends React.Component {
    render() {
        const { character, advNum } = this.props;
        return (
            <div>
                <h1>Adventurer's Log</h1>
                <p>
                    Adventure title: {character.adventures[advNum].name}
                </p>
                <hr />
                <p><a href={`/users/${character.player}/characters/${character._id}/adventures/${advNum}/edit`}>Edit adventure</a></p>
                <form action={`/users/${character.player}/characters/${character._id}/adventures/${advNum}?_method=PUT`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete this adventure log`}/>
                </form>
                <p><a href={`/users/${character.player}/characters/${character._id}`}>Back to {character.name}</a></p>
            </div>
        )
    }
}

module.exports = Index