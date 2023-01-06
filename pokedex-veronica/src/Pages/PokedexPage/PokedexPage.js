import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { GlobalContext } from '../../context/GlobalContext';
import { DivPoke } from '../PokemonList/PokemonListStyle';
import { Container, HomePage, Title } from './PokedexPageStyle'


const PokedexPage = (props) => {

  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex } = context;

  return (
    <Container>        
      <Header/>
      <HomePage> 
      <Title>Meus Pokémons</Title>
      <DivPoke>
      {pokedex.map((pokemon) => ( <PokemonCard key={pokemon.name} pokemon={pokemon} pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`} removeFromPokedex={removeFromPokedex}/>))}
      </DivPoke>
      </HomePage>
    </Container>
  )
}

export default PokedexPage