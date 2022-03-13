const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const { character, advNum } = this.props;
        const adv = character.adventures[advNum]
        return (
            <Default user={character.player}>
                <article className="narrow-content">
                    <h1>{adv.name}</h1>
                    <p>As experienced by {character.name}</p>
                    <hr />
                    <p className="text-left">
                        Date played: {adv.date} <br />
                        Gold Earned: {adv.goldChange} <br />
                        Downtime accrued: {adv.downtime}<br />
                        Magic item(s) found: {adv.magicItems} <br />
                        Dungeon master: {adv.dungeonMaster}<br />
                        {character.name} decided {adv.levelGain ? 'to' : 'not to' } gain a level.
                    </p>
                    <p>Adventure notes:<br />
                        {adv.notes}
                    </p>
                    <hr />
                    <p><a href={`/users/${character.player}/characters/${character._id}/adventures/${advNum}/edit`} id="myButton">Edit adventure</a></p>
                    <form action={`/users/${character.player}/characters/${character._id}/adventures/${advNum}?_method=PUT`} method="POST">
                        <input className="btn btn-danger" type="submit" value={`Delete this adventure log`}/>
                    </form>
                    <p className='tiny-text'><a href={`/users/${character.player}/characters/${character._id}`}>Back to {character.name}</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = Index