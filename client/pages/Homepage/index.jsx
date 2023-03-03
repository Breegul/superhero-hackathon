import React from 'react'
import './style.css'

const HomePage = () => {

    const superheroes = [
        {
            id: 1,
            name: 'Superman',
            image: 'https://ca.slack-edge.com/THYP60S66-U04APTQU7DW-406bbf06d915-512',
            description: 'The only thing that is thiccer than my skin is my accent'
        },
        {
            id: 2,
            name: 'Batman',
            image: 'https://ca.slack-edge.com/THYP60S66-U04FEH7TPQU-62e658136d3b-512',
            description: 'The Dark Knight of Somali Land '
        },
        {
            id: 3,
            name: 'Spiderman',
            image: 'https://ca.slack-edge.com/THYP60S66-U04F95B19SR-929c16c4f1e5-512',
            description: 'my spider senses are tingling'
        },
        {
            id: 4,
            name: 'Billy-man',
            image: 'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
            description: ' I Outlived Ezekiel and Beehronica'
        }
    ];

    return (
        <div className="superheroes">
            <h1>Our superhero page</h1>
            <div className="superheroes-list">
                {superheroes.map(superhero => (
                    <div key={superhero.id} className="superhero-card">
                        <img src={superhero.image} alt={superhero.name} />
                        <div className="superhero-description">
                            <p>{superhero.name}</p>
                            <p>{superhero.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};


export default HomePage;
