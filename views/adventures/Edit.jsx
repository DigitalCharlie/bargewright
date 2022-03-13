const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        const { character, advNum, user } = this.props;
        const adv = character.adventures[advNum]
        return (
            <Default user={user}>
                <form action={`/users/${user}/characters/${character._id}/adventures/${advNum}?_method=PUT`} method="post">
                    <fieldset>
                    <legend>Log Another Adventure for {character.name}</legend>
                    <label>
                        NAME:<input type="text" name="name" defaultValue={adv.name} />
                    </label>
                    <label>
                        DATE:<input type="date" name="date" defaultValue={adv.date} />
                    </label>
                    <label>
                        DID YOU GAIN A LEVEL?:
                        {character.adventures[advNum].levelGain ? <input type="checkbox" name="levelGain" defaultChecked /> : <input type="checkbox" name="levelGain" />}
                    </label>
                    <label>
                        GOLD:<input type="number" name="goldChange" defaultValue={adv.goldChange} />
                    </label>
                    <label>
                        DOWNTIME:<input type="number" name="downtime" defaultValue={adv.downtime} />
                    </label>
                    <label>
                        DUNGEON MASTER:<input type="text" name="dungeonMaster" defaultValue={adv.dungeonMaster}/>
                    </label>
                    <label>
                        MAGIC ITEM:<input type="text" name="magicItems" defaultValue={adv.magicItems} />
                    </label>
                    <label>
                        NOTES:<input type="text" name="notes" defaultValue={adv.notes}/>
                    </label>
                    </fieldset>
                    <input type="submit" value="update adventure log" />
                </form>
            </Default>
        )
    }
}

module.exports = New