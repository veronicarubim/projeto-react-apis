import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Container, 
  DetailPage, 
  Title,
  Sprite, 
  PokemonNumber,
  ContainerPokemon,
  BoxBaseStats, 
  BaseStats, 
  ContainerStats, 
  HrStats, 
  DivStat, 
  TextStats, 
  NumberStats, 
  DivBar, 
  BarStats, 
  TextTotalStats, 
  NumberTotalStats, 
  DivMoveTypes,
  PokemonImagem,
  DivPokeInfo,
  ContainerMoves,
  ContainerSprites,
  Background,
  TypesContainer,
  PokemonName,
  PokemonType,
  MoveName,
  Imagem
} from './PokemonDetailStyle' 
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {getColors} from '../../utils/ReturnCardColor'
import { getTypes } from '../../utils/ReturnType'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/pokeballdt.png'

const PokemonDetailPage = () => {

  const params = useParams()
  const context = useContext(GlobalContext)
  const {detalhesPokemon, setDetalhesPokemon} = context

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => {setDetalhesPokemon(response.data)})
      .catch((error) => {console.log(error)});
  };

  const totalStats = (stat) => {
    return (
      stat[0].base_stat +
      stat[1].base_stat +
      stat[2].base_stat +
      stat[3].base_stat +
      stat[4].base_stat +
      stat[5].base_stat
    );
  };

  const powerBar = (index) => {
    if (index <= 50) {
      return "#ff7c2d"
    } else {
      return "#ffdd6a"
    }
  };

  return (

    <Container >        
      <Header/>
      <DetailPage>
      <Title>Detalhes</Title>
      <Background color={getColors(detalhesPokemon.types && detalhesPokemon.types[0].type.name)}>     
      <ContainerSprites>
        <Sprite src={detalhesPokemon.sprites?.front_default} alt=""/>
        <Sprite src={detalhesPokemon.sprites?.back_default} alt=""/>
      </ContainerSprites>
      
      <BoxBaseStats>
        <BaseStats>Base stats</BaseStats>
        <ContainerStats>
          <HrStats></HrStats>
          {detalhesPokemon.stats?.map((stat) => {
            return (
            <>
            <DivStat key={stat.stat.name}>
            <TextStats>
            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
            </TextStats>
            <NumberStats>{stat.base_stat}</NumberStats>
              <DivBar>
                <BarStats color={powerBar(stat.base_stat)} size={stat.base_stat}/>
              </DivBar>
            </DivStat>
            <HrStats></HrStats>
            </>
            );
            }
          )};

            <DivStat>
            <TextTotalStats>Total</TextTotalStats>
            <NumberTotalStats>
            {detalhesPokemon.stats && totalStats(detalhesPokemon.stats)}
            </NumberTotalStats>
              <DivBar>
              <BarStats></BarStats>
              </DivBar>
              </DivStat>
              <HrStats></HrStats>
        </ContainerStats>
      </BoxBaseStats>

          <ContainerPokemon>
            <DivPokeInfo>
            <Imagem src={logo} alt=""/>
            <PokemonNumber>#0{detalhesPokemon.id}</PokemonNumber>
            <PokemonName>{detalhesPokemon.name}</PokemonName>
            <TypesContainer>
                {detalhesPokemon.types?.map((types) => {
                return (
            <PokemonType key={types.type.name} src={getTypes(types.type.name)} alt=""/>);
              })};
            </TypesContainer>
            </DivPokeInfo>   

            <ContainerMoves>
              <BaseStats>Moves:</BaseStats>
              <DivMoveTypes>
                <MoveName>
                  {detalhesPokemon.moves && detalhesPokemon.moves[0].move.name.charAt(0).toUpperCase() + detalhesPokemon.moves[0].move.name?.slice(1)}
                </MoveName>
                <MoveName>
                  {detalhesPokemon.moves && detalhesPokemon.moves[1].move.name.charAt(0).toUpperCase() + detalhesPokemon.moves[1].move.name?.slice(1)}
                </MoveName>
                <MoveName>
                  {detalhesPokemon.moves && detalhesPokemon.moves[2].move.name.charAt(0).toUpperCase() + detalhesPokemon.moves[2].move.name?.slice(1)}
                </MoveName>
                <MoveName>
                  {detalhesPokemon.moves && detalhesPokemon.moves[3].move.name.charAt(0).toUpperCase() + detalhesPokemon.moves[3].move.name?.slice(1)}
                </MoveName>
              </DivMoveTypes>
            </ContainerMoves>
          </ContainerPokemon>
          <PokemonImagem
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detalhesPokemon.id}.png`}
          />
          </Background>
      </DetailPage>
    </Container>
  )
}

export default PokemonDetailPage