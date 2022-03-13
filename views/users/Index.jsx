const React = require('react')
const Default = require('../Default')
const User = require('../../models/users')


class Index extends React.Component {
    render() {
        const { characters, user, userObj, sort } = this.props;
        console.log(sort)
        const nameSort = sort === 'name' ? 'name/desc' : 'name/asc'
        const raceSort = sort === 'race' ? 'race/desc' : 'race/asc'
        const classSort = sort === 'class' ? 'class/desc' : 'class/asc'
        const levelSort =  sort === 'level' ? 'level/desc' : 'level/asc'
        return (
            <Default user={user}>
                <article className="wide-content">
                    <h1>Welcome back, {user}</h1>
                    <p className="welcome-msg">{userObj.welcome}</p>
                    <hr />
                    <h3>Characters</h3>
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col"><a href={`/users/${user}/sort/${nameSort}`}>Name</a></th>
                                <th scope="col"><a href={`/users/${user}/sort/${raceSort}`}>Race</a></th>
                                <th scope="col"><a href={`/users/${user}/sort/${classSort}`}>Class</a></th>
                                <th scope="col"><a href={`/users/${user}/sort/${levelSort}`}>Level</a></th>
                                <th scope="col">Quicklinks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                characters.map((character) => (
                                    <tr>
                                        <td>
                                            <a href={`/users/${user}/characters/${character._id}`}>{character.name}</a>
                                        </td>
                                        <td>
                                            <a href={`/users/${user}/characters/${character._id}`}>{character.race}</a>
                                        </td>
                                        <td>
                                            <a href={`/users/${user}/characters/${character._id}`}>{character.class}</a>
                                        </td>
                                        <td>
                                            <a href={`/users/${user}/characters/${character._id}`}>{ character.level }</a>
                                        </td>
                                        <td className="quick-links">
                                            <a href={`/users/${user}/characters/${character._id}/edit`}>📝</a>&nbsp;&nbsp;<a href={`/users/${user}/characters/${character._id}/adventures/new`}>🆕</a>
                                        </td>                                                                                                                 
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <p className="text-center"><a href={`/users/${user}/new`}>Add new</a></p>
                    <p className='tiny-text'><a href={`/users/${user}/edit`}>Edit Account</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = Index