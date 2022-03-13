const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const { character } = this.props;
        const money = character.adventures.reduce((gold, {goldChange}) => gold + goldChange, 0)
        let levelsGained = 1
        for (let i=0;i < character.adventures.length; i++) {
            if (character.adventures[i].levelGain === true)levelsGained++
        }
        const charLink = `/users/${character.player}/characters/${character._id}`

        return (
            <Default user={character.player}>
                <article className="wide-content">
                    <h1>{character.name} the {character.race} {character.class}</h1>
                    <hr />
                    <div className="row">
                        <div className='col-sm justify-content-end d-flex'>
                            <img src={character.image} className="character-image" />
                        </div>
                        <div className='col-sm'>
                            {character.sheet ? <a href={character.sheet}>View character sheet<br /></a> : '' } 
                            Total gold: {money} <br />
                            Magic Items:&nbsp;
                                {
                                    character.adventures.map((adventure) => (
                                        adventure.magicItems ? adventure.magicItems + ', ' : ''
                                    ))
                                }<br />
                            Listed level: {character.level}<br />
                            Levels gained in play: {levelsGained}<br />
                            {character.notes ? <hr /> : '' } 
                            {character.notes}
                        </div>
                    </div>

                    <hr />
                    <h3>Adventures</h3>
                    <table className="table table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Adventure</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gold</th>
                                        <th scope="col">Magic Item</th>
                                        <th scope="col">Quicklinks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {   
                                        character.adventures.map((adventure, index) => (
                                            <tr key={`${index}`}>
                                                <td>
                                                    <a href={`${charLink}/adventures/${index}`}>
                                                        {adventure.name}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${charLink}/adventures/${index}`}>
                                                        {adventure.date}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${charLink}/adventures/${index}`}>
                                                        {adventure.goldChange}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${charLink}/adventures/${index}`}>
                                                        {adventure.magicItems}
                                                    </a>
                                                </td>
                                                <td className="quick-links">
                                                    <a href={`${charLink}/adventures/${index}/edit`}>📝</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                    <p className="text-center"><a href={`${charLink}/adventures/new`}>Log new adventure</a></p>
                    <hr />
                    <p className='tiny-text'>
                        <a href={`${charLink}/edit`}>Edit {character.name}</a> <br />
                        <a href={`/users/${character.player}`}>Back to your characters</a>
                    </p>
                </article>
            </Default>
        )
    }
}

module.exports = Index