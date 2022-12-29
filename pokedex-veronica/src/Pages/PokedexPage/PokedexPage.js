import React from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Container, HomePage, Title } from './PokedexPageStyle'

const PokedexPage = () => {
  return (
    <Container>        
      <Header/>
      <HomePage>
      <Title>Meus Pokémons</Title>
      <PokemonCard/>
      </HomePage>
    </Container>
  )
}

export default PokedexPage