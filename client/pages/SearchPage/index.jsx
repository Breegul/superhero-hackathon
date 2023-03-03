import React, { useState } from 'react'
import axios from 'axios'
import HeroCard from '../../components/HeroCard';
import { useHero } from '../../contexts';

const SearchPage = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const {heroes, setHeroes} = useHero();

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setHeroes({});
        const res = await fetch(`https://www.superheroapi.com/api.php/6024611370991381/search/${input}`)
        const data = await res.json();
        setResults(data.results);
        console.log(data.results);
        console.log(results);
        setHeroes(data.results);
        setLoading(false);
    }
    const addHero=(id) =>{
        let h = heroes.filter(e=>e.id===id)[0];
        
    }

    return (
        <div>
            <form>
                <input type="text" name="search" id="search" onChange={handleInput} />
                <input type="submit" value="search" onClick={handleSubmit} />
            </form>
            {loading? "": results.map(e=>
            <HeroCard 
                key={e.id} id={e.id} hero_name={e.name} 
                powerstats={e.powerstats} full_name={e.biography["full-name"]} 
                publisher={e.biography.publisher} image={e.image.url}
                addHero={addHero}
            />)}
        </div>
    )
}

export default SearchPage