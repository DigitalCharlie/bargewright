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
        console.log(levelsGained)
        const advLink = `/users/${character.player}/characters/${character._id}/adventures`
        const advSort = ''
        const dateSort = ''
        const goldSort = ''
        const magicSort = ''

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
                            Total gold: {money} <br />
                            Magic Items:&nbsp;
                                {
                                    character.adventures.map((adventure) => (
                                        adventure.magicItems ? adventure.magicItems + ', ' : ''
                                    ))
                                }<br />
                            Listed level: {character.level}<br />
                            Levels gained in play: {levelsGained}<br />
                            <hr />
                            {character.notes}
                        </div>
                    </div>

                    <hr />
                    <h3>Adventures</h3>
                    <table className="table table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col"><a href={`/users/${character.player}/sort/${advSort}`}>Adventure</a></th>
                                        <th scope="col"><a href={`/users/${character.player}/sort/${dateSort}`}>Date</a></th>
                                        <th scope="col"><a href={`/users/${character.player}/sort/${goldSort}`}>Gold</a></th>
                                        <th scope="col"><a href={`/users/${character.player}/sort/${magicSort}`}>Magic Item</a></th>
                                        <th scope="col">Quicklinks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        character.adventures.map((adventure, index) => (
                                            <tr>
                                                <td>
                                                    <a href={`${advLink}/${index}`}>
                                                        {adventure.name}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${advLink}/${index}`}>
                                                        {adventure.date}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${advLink}/${index}`}>
                                                        {adventure.goldChange}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`${advLink}/${index}`}>
                                                        {adventure.magicItems}
                                                    </a>
                                                </td>
                                                <td className="quick-links">
                                                    <a href={`${advLink}/${index}/edit`}>📝</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                    <p className="text-center"><a href={`/users/${character.player}/characters/${character._id}/adventures/new`}>Log new adventure</a></p>
                    <hr />
                    <p className='tiny-text'>
                        <a href={`/users/${character.player}/characters/${character._id}/edit`}>Edit {character.name}</a> <br />
                        <a href={`/users/${character.player}`}>Back to your characters</a>
                    </p>
                </article>
            </Default>
        )
    }
}

module.exports = Index