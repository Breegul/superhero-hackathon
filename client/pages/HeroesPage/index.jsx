import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function HeroesPage() {
    const [heroes, setHeroes] = useState([]);
    
  useEffect(() => {
    async function displayHeroes() {
    const res = await fetch("https://www.superheroapi.com/api.php/6024611370991381/search/spider-man");
    const data = await res.json()
    setHeroes(data)
  }  
  displayHeroes()  
}, [])

  return (
    <main>
      <div>
        {heroes.map(hero => <Link to={`${hero.id}`} key={hero.id}></Link>)}
      </div>
    </main>
  )
}

