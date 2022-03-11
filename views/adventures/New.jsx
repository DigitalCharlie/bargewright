const React = require('react')
// const DefaultLayout = require('../Default')

class New extends React.Component {
    render() {
        const { user, character } = this.props
        return (
            <div>
                <form action={`/users/${user}/characters/${character._id}/adventures?_method=PUT`} method="post">
                    <fieldset>
                    <legend>Log Another Adventure for {character.name}</legend>
                    <label>
                        NAME:<input type="text" name="name" placeholder="enter adventure name" />
                    </label>
                    <label>
                        DATE:<input type="date" name="date" placeholder="when did you play" />
                    </label>
                    <label>
                        DID YOU GAIN A LEVEL?:<input type="checkbox" name="levelGain" defaultChecked />
                    </label>
                    <label>
                        GOLD:<input type="number" name="goldChange" defaultValue="1" />
                    </label>
                    <label>
                        DOWNTIME:<input type="number" name="downtime" defaultValue="10" />
                    </label>
                    <label>
                        DUNGEON MASTER:<input type="text" name="dungeonMaster" placeholder="dungeon master name"/>
                    </label>
                    <label>
                        MAGIC ITEM:<input type="text" name="magicItems" placeholder="magic items found" />
                    </label>
                    <label>
                        NOTES:<input type="text" name="notes" placeholder="adventure notes"/>
                    </label>
                    </fieldset>
                    <input type="submit" value="log adventure" />
                </form>
            </div>
        )
    }
}

module.exports = New