import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'

const PokemonCard = () => {

  const navigate = useNavigate()

  return (
    <div>
<button onClick={() => {goToDetail(navigate)}}>Detalhes do Pokemon </button>
    </div>
  )
}

export default PokemonCard