import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToPokeList } from '../../routes/coordinator'
import { ButtonStyle, ButtonStyle2, HeaderStyle, ImgStyle } from './HeaderStyle'
import imagem from '../../assets/image.png'

const Header = () => {
 
  const navigate = useNavigate()

  return (

    <HeaderStyle>
      <ButtonStyle2 onClick={() => {goToPokeList(navigate)}}> Todos Pokémons</ButtonStyle2>
      <ImgStyle src={imagem} alt="imagem"></ImgStyle>
      <ButtonStyle onClick={() => {goToPokedex(navigate)}}>Pokédex</ButtonStyle>
    </HeaderStyle>
   
  )
}

export default Header