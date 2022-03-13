const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { character, advNum, user } = this.props;
        const adv = character.adventures[advNum]
        return (
            <Default user={user}>

                <article className="narrow-content">
                    <h1>Log another adventure for {character.name}</h1>
                    <form action={`/users/${user}/characters/${character._id}/adventures/${advNum}?_method=PUT`} method="post">
                        <input type="text" name="name" defaultValue={adv.name} /><br />
                        <input type="date" name="date" defaultValue={adv.date} /><br />
                        <input type="number" name="goldChange" defaultValue={adv.goldChange} placeholder="gold"/><br />
                        <input type="number" name="downtime" defaultValue={adv.downtime} placeholder="downtime" /><br />
                        <input type="text" name="dungeonMaster" defaultValue={adv.dungeonMaster} placeholder="dungeon master"/><br />
                        <input type="text" name="magicItems" defaultValue={adv.magicItems} placeholder="magic items"/><br />
                        <label>
                        {character.adventures[advNum].levelGain ? <input type="checkbox" name="levelGain" defaultChecked /> : <input type="checkbox" name="levelGain" />} Did you gain a level?
                        </label><br />
                        <label className="field-label textarea-label">Adventure notes</label> <br />
                        <textarea name="welcome"></textarea><br />
                        <input className="btn btn-danger" type="submit" value="log adventure" />
                    </form>
                    <p className='tiny-text'><a href={`/users/${character.player}/characters/${character._id}`}>Back to {character.name}</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = New