
import React from 'react';


const HeroCard = ({ id, hero_name, powerstats, full_name, publisher, image, votes, vote, deleteHero }) => {

    let stats = []

    for (e in powerstats) {
        stats.push(
            <li>
                {e}: {powerstats[e]}
            </li>
        )
    }


    return (

        <div className='hero-card'>
            <p className='hero_name'> {hero_name} </p>
            <div className='power_stats'>
                <ul>

                    {stats.map((e) => e)}

                </ul>
            </div>
            <p className='full_name'> {full_name}</p>
            <p className='publisher'> {publisher}</p>
            <p><span className="votes-counter">Votes: {votes}</span></p>
            <img src={image} />
            <button onClick={() => vote(id, 1)}>+</button>
            <button onClick={() => vote(id, -1)}>-</button>
            <button onClick={() => { deleteHero(id); }} >Delete</button>

        </div>
    )
};

export default HeroCard;
