
import React from 'react';
import './style.css'


const HeroCard = ({ id, hero_name, powerstats, full_name, publisher, image, votes, vote, deleteHero }) => {

    let stats = []

    for (let e in powerstats) {
        stats.push(
            <li>
                {e}: {powerstats[e]}
            </li>
        )
    }


    return (

        <div className='hero-card'>
            <p className='hero_name'>  {hero_name} </p>
            <div className='power-stats-wrapper'>
                <div className='power_stats'>
                    <ul>
                        {stats.map((e) => e)}
                    </ul>
                </div>
            </div>
            <p className='full_name'>real name: {full_name}</p>
            <p className='publisher'>publisher: {publisher}</p>
            <p><span className="votes-counter">Votes: {votes}</span></p>
            <img src={image} />
            <div className='button-wrapper'>
                <button className='vote_button' onClick={() => vote(id, 1)}> add a vote </button>
                <button className='vote_button' onClick={() => vote(id, -1)}>remove a vote</button>
                <button className='delete_button' onClick={() => { deleteHero(id); }} >Delete</button>
            </div>
        </div >
    )
};

export default HeroCard;
