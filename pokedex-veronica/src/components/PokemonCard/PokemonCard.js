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
  DeleteButton,
  PokemonCardBox
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

  return (
    <PokemonCardBox>
        <Container color={getColors(pokemonDetail.types && pokemonDetail.types[0].type.name)}>
      <div>
        <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`} alt={pokemonDetail.name} />
        <PokemonNumber>#0{pokemonDetail.id}</PokemonNumber>
        {pokemonDetail.types?.map((types)=> { 
          return <PokemonType key={types.type.name} src={getTypes(types.type.name)} alt=""/>
          })}
        <PokemonName>{pokemonDetail.name}</PokemonName>
        <DetailButton onClick={() => {goToDetail(navigate, pokemonDetail.id);
        }}>Detalhes</DetailButton>
      </div>
      <div>
      {location.pathname === "/" ? ( <CatchButton onClick={() => addToPokedex(pokemonDetail)}>Capturar!</CatchButton>
      ) : (<DeleteButton onClick={() => removeFromPokedex(pokemonDetail)}>Excluir</DeleteButton>
      )}
        <Pokeball src={pokeball} alt="pokeball" />
      </div>
    </Container>
    </PokemonCardBox>
  );
};

export default PokemonCard;
   
  