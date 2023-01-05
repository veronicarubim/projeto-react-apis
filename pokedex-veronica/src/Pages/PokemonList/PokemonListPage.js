import React from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Container, DivPoke, HomePage, Title } from './PokemonListStyle'
import { useState, useEffect } from 'react'

const PokemonListPage = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {setPokemons(response.data.results)})
    .catch((error) => {console.log(error)})
  };

  console.log(pokemons)

  return (
 
      <Container>        
      <Header/>
      <HomePage>
      <Title>Todos Pokémons</Title>
      <DivPoke>
      {pokemons.map((pokemon) => {
        return (<PokemonCard key={pokemon.url} pokemon={pokemon} /* naPokedex={addPokedex(pokemon) *//>)
      })}
      </DivPoke>
      </HomePage>
    </Container>

  )
}

export default PokemonListPage