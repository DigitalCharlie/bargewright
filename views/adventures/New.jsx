const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { user, character } = this.props
        return (
            <Default user={user}>
                <article className="narrow-content">
                    <h1>Log another adventure for {character.name}</h1>
                    <form className='needs-validation' action={`/users/${user}/characters/${character._id}/adventures?_method=PUT`} method="post">
                        <input type="text" name="name" placeholder="enter adventure name" required/><br />
                        <input type="date" name="date" placeholder="when did you play" required/><br />
                        <input type="number" name="goldChange" placeholder="gold found" /><br />
                        <input type="number" name="downtime" placeholder="downtime earned (default 10)" /><br />
                        <input type="text" name="dungeonMaster" placeholder="dungeon master name"/><br />
                        <input type="text" name="magicItems" placeholder="magic item(s) (comma separated)" /><br />
                        <label>
                            <input type="checkbox" name="levelGain" defaultChecked /> Did you gain a level?
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