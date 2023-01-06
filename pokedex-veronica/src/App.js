import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalStyle } from './GlobalStyled';
import Router from './routes/Router';
import { GlobalContext } from './context/GlobalContext';


function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {setPokemons(response.data.results)})
    .catch((error) => {console.log(error)})
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
      setPokedex(newPokedex)
    
  }

  const context = {
    pokemons,
    addToPokedex,
    pokedex,
    removeFromPokedex
  }

  return (
    <div>
      <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Router/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
