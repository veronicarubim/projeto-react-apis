import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  Pokemon,
  DetailButton,
  DeleteButton
} from './PokemonCardStyle';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { getTypes } from '../../utils/ReturnType';
import pokeball from '../../assets/pokeball.png'
import { getColors } from '../../utils/ReturnCardColor';
import { GlobalContext } from '../../context/GlobalContext';

const PokemonCard = (props) => {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex } = context

  const navigate = useNavigate()
  const location = useLocation()
  const [pokemonDetail, setPokemonDetail] = useState({})

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
        <Container color={getColors(pokemonDetail.types && pokemonDetail.types[0].type.name)}>
      <div>
        <Pokemon src={pokemonDetail.sprites?.front_default} alt={pokemonDetail.name} />
        <PokemonNumber>0{pokemonDetail.id}</PokemonNumber>
        {pokemonDetail.types?.map((types)=> { 
          return <PokemonType key={types.type.name} src={getTypes(types.type.name)} alt=""/>
          })}
        <PokemonName>{pokemonDetail.name}</PokemonName>
        <TypesContainer></TypesContainer>
        <DetailButton onClick={() => {goToDetail(navigate)}}>Detalhes do Pokémon </DetailButton>
      </div>
      <div>
      {location.pathname === "/" ? ( <CatchButton onClick={() => addToPokedex(pokemonDetail)}>Capturar!</CatchButton>
      ) : (<DeleteButton onClick={() => removeFromPokedex(pokemonDetail)}>Remover da Pokedex </DeleteButton>
      )}
        <Pokeball src={pokeball} alt="pokeball" />
      </div>
      <div>
    </div>
    </Container>
    </div>
  );
};

export default PokemonCard;
   
  