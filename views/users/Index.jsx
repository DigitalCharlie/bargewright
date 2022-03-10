const React = require('react')

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
            </div>
        )
    }
}

module.exports = Index