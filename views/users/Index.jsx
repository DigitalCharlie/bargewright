const React = require('react')
const Default = require('../Default')


class Index extends React.Component {
    render() {
        const { characters, user } = this.props;
        return (
            <div>
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
                <form action={`/users/${user}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger" type="submit" value={`Delete user`}/>
                </form>
            </div>
        )
    }
}

module.exports = Index