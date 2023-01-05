import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  DetailButton
} from './PokemonCardStyle';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { getTypes } from '../../utils/ReturnType';
import pokeball from '../../assets/pokeball.png'
import { getColors } from '../../utils/ReturnCardColor';

const PokemonCard = (props) => {

  const navigate = useNavigate()
  const [pokemonDetail, setPokemonDetail] = useState([])

  useEffect(() => {
    getFeatures();
  }, []);

  const getFeatures = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
    .then((response) => {setPokemonDetail(response.data)})
    .catch((error) => {console.log(error)})
  };

  console.log(pokemonDetail)

  return (
    <div>
        <Container cardColor={getColors(pokemonDetail.types)}>
      <div>
        <PokemonNumber>{pokemonDetail.id}</PokemonNumber>
        {pokemonDetail.types?.map((types)=> { 
          return <PokemonType key={types.type.name} src={getTypes(types.type.name)} alt=""/>
          })}
        <PokemonName>{props.pokemon.name}</PokemonName>
        <TypesContainer></TypesContainer>
        <DetailButton onClick={() => {goToDetail(navigate)}}>Detalhes do Pokémon </DetailButton>
      </div>
      <div>
        <CatchButton>Capturar!</CatchButton>
        <Pokeball src={pokeball} alt="pokeball" />
      </div>
      <div>
    </div>
    </Container>
    </div>
  );
};

export default PokemonCard;
   
  