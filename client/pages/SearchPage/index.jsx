import React, { useState } from 'react'
import axios from 'axios'
import { map } from '../../../api/api';

const SearchPage = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await fetch(`https://www.superheroapi.com/api.php/6024611370991381/search/${input}`)
        const data = await res.json();
        setResults(data.results);
        console.log(data.results)
        console.log(results)
        setLoading(false)
    }

    return (
        <div>
            <form>
                <input type="text" name="search" id="search" onChange={handleInput} />
                <input type="submit" value="search" onClick={handleSubmit} />
            </form>
            {loading? "": results.map(e=>e)}
        </div>
    )
}

export default SearchPage