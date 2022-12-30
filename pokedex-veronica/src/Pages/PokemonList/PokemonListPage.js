import React from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Container, HomePage, Title } from './PokemonListStyle'

const PokemonListPage = () => {
  return (
 
      <Container>        
      <Header/>
      <HomePage>
      <Title>Todos Pokémons</Title>
      <PokemonCard/>
      </HomePage>
    </Container>

  )
}

export default PokemonListPage