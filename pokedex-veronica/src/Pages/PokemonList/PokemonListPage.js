import React from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokemonListPage = () => {
  return (
    <div>
        <h1>Pokemon List</h1>
        <Header/>
        <PokemonCard/>
    </div>
  )
}

export default PokemonListPage