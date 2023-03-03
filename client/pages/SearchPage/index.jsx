import React, { useState } from 'react'
import axios from 'axios'
import HeroCard from '../../components/HeroCard';
import { useHero } from '../../contexts';

const SearchPage = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { heroes, setHeroes } = useHero();

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await fetch(`https://www.superheroapi.com/api.php/6024611370991381/search/${input}`)
        const data = await res.json();
        console.log(data)
        setResults(data.results);
        if (data.response=="success") setLoading(false);
        console.log(data.results);
    }
    const addHero = (id) => {
        let h = results.filter(e => e.id === id)[0];
        console.log(h)
        setHeroes([...heroes, h])
    }

    return (
        <div>
            <form>
                <input type="text" name="search" id="search" onChange={handleInput} />
                <input type="submit" value="search" onClick={handleSubmit} />
            </form>
            {loading ? "No heroes" : results.map(e =>
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
