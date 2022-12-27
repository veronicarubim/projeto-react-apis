import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToPokeList } from '../../routes/coordinator'

const Header = () => {
 
  const navigate = useNavigate()

  return (

    <div>
      <button onClick={() => {goToPokedex(navigate)}}> Ir Para Pokedex </button>
      <button onClick={() => {goToPokeList(navigate)}}> Todos os Pokemons</button>
    </div>
   
  )
}

export default Header