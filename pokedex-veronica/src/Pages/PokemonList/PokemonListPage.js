import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Container, DivPoke, HomePage, Title } from './PokemonListStyle'
import { GlobalContext } from '../../context/GlobalContext'

const PokemonListPage = (props) => {

  const context = useContext(GlobalContext);
  const { pokemons, addToPokedex, pokedex } = context;

  const filteredPokelist = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
 
      <Container>        
      <Header/>
      <HomePage>
      <Title>Todos Pokémons</Title>
      <DivPoke>
      {filteredPokelist().map((pokemon) => {
        return (<PokemonCard key={pokemon.url} pokemon={pokemon} addToPokedex={addToPokedex} />)
      })}
      </DivPoke>
      </HomePage>
    </Container>

  )
}

export default PokemonListPage