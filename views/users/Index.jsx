const React = require('react')
const Default = require('../Default')
const User = require('../../models/users')


class Index extends React.Component {
    render() {
        const { characters, user } = this.props;
        // const userObj = User.findOne({username: user})
        // console.log(userObj.username)
        console.log(user)
        return (
            <Default user={user}>
                <article className="wide-content">
                    <h1>Welcome back, {user}</h1>
                    {
                        characters.map((character) => (
                            <article>
                                <a href={`/users/${user}/characters/${character._id}`}>
                                    <p>
                                        {character.name}
                                    </p>
                                </a>
                            </article>
                        ))
                    }
                    <p className='tiny-text'><a href={`/users/${user}/edit`}>Edit Account</a></p>
                </article>
            </Default>
        )
    }
}

module.exports = Index