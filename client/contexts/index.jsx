import React, {useState, useContext, createContext} from "react"

const HeroContext = createContext();

export const HeroProvider = ({children}) => {
    const [heroes, setHeroes] = useState([]);
    return (
        <HeroContext.Provider value={{heroes, setHeroes}}>
            {children}
        </HeroContext.Provider>
    );
}

export const useHero = () => useContext(HeroContext);