import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHero } from '../../contexts';
import {HeroCard} from '../../components'

export default function HeroesPage() {
  // const [heroes, setHeroes] = useState([]);
  const { heroes, setHeroes } = useHero();

  useEffect(() => {
    async function displayHeroes() {
      // const res = await fetch("https://www.superheroapi.com/api.php/6024611370991381/search/spider-man");
      // const data = await res.json()
      // setHeroes(data.results)
      // console.log(data.results)
      console.log(heroes)
    }
    displayHeroes()
  }, [])
  const vote=()=>{
    console.log("vote")
  }

  return (
    <main>
      <div>
        {heroes.map(hero => 
        <Link to={`${hero.id}`} key={hero.id}>
          <HeroCard 
                key={hero.id} id={hero.id} hero_name={hero.name} 
                powerstats={hero.powerstats} full_name={hero.biography["full-name"]} 
                publisher={hero.biography.publisher} image={hero.image.url}
                vote={vote}
            />
        </Link>)}
      </div>
    </main>
  )
}

