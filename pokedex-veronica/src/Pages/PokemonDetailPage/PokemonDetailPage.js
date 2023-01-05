import React from 'react'
import Header from '../../components/Header/Header'
import { Container, DetailPage, Title, Imagem } from './PokemonDetailStyle'
import imagem from '../../assets/pokemonlogo.png'

const PokemonDetailPage = () => {
  return (
    <Container>        
      <Header/>
      <DetailPage>
      <Title>Detalhes</Title>
      <Imagem src={imagem}></Imagem>
      </DetailPage>
    </Container>
  )
}

export default PokemonDetailPage