import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokedex, goToPokeList } from '../../routes/coordinator'
import { ButtonStyle, ButtonStyle2, HeaderStyle, ImgStyle } from './HeaderStyle'
import imagem from '../../assets/image.png'

const Header = () => {
 
  const navigate = useNavigate()
  const location = useLocation()

  return (

    <HeaderStyle>
      {location.pathname === "/" ? ( <ButtonStyle onClick={() => {goToPokedex(navigate)}}>Pokédex</ButtonStyle>
      ) : (<ButtonStyle2 onClick={() => {goToPokeList(navigate)}}> Todos Pokémons</ButtonStyle2>)}
      <ImgStyle src={imagem} alt="imagem"></ImgStyle>
    </HeaderStyle>
   
  )
}

export default Header