import React from 'react'
import Header from '../../components/Header/Header'
import { Container, HomePage, Title } from './PokedexPageStyle'

const PokedexPage = () => {
  return (
    <Container>        
      <Header/>
      <HomePage>
      <Title>Meus Pokémons</Title>
      </HomePage>
    </Container>
  )
}

export default PokedexPage