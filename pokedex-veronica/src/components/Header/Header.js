import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokedex, goToPokeList } from '../../routes/coordinator'
import { ButtonStyle2, ButtonStylePokedex, ButtonStyleRemove, HeaderStyle, ImgStyle } from './HeaderStyle'
import imagem from '../../assets/image.png'
import { GlobalContext } from '../../context/GlobalContext'

const Header = () => {
 
  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const {addToPokedex, removeFromPokedex, detalhesPokemon, pokedex} = context

  const renderCatchButton = () => {
    const inPokedex = pokedex.find(
      (pokemonPokedex) => pokemonPokedex.name === pokemonPokedex.name) 
      if (!inPokedex) {
        return (<ButtonStylePokedex onClick={() => {addToPokedex(detalhesPokemon)}} >Capturar</ButtonStylePokedex>
      )} else {
        return (<ButtonStyleRemove onClick={() => {removeFromPokedex(detalhesPokemon)}}
        >Remover</ButtonStyleRemove>)
      }
  }

  return (

    <HeaderStyle>
      {location.pathname === "/" ? ( <ButtonStylePokedex onClick={() => {goToPokedex(navigate)}}>Pokédex</ButtonStylePokedex>
      ) : (<ButtonStyle2 onClick={() => {goToPokeList(navigate)}}> Todos Pokémons</ButtonStyle2>)}
      
      {location.pathname === `/detalhes/${detalhesPokemon.id}` ? (renderCatchButton() 
      ) : (null)}
      <ImgStyle src={imagem} alt="imagem"></ImgStyle>
    </HeaderStyle>
   
  )
}

export default Header