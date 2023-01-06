import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Container, 
  DetailPage, 
  Title, 
  Imagem, 
  Container2, 
  Sprite, 
  BoxBaseStats, 
  TitleBaseStatsMoves, 
  ContainerStats, 
  HrStats, 
  DivStat, 
  TextStats, 
  NumberStats, 
  DivBar, 
  BarStats, 
  TextTotalStats, 
  NumberTotalStats,
  SecondDiv,
  PokemonID, 
  DivMoveTypes, 
  BoxMoves,
  TextMoveType,
  Card
} from './PokemonDetailStyle' 
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {getColors} from '../../utils/ReturnCardColor'
import { PokemonName, PokemonType, TypesContainer } from '../../components/PokemonCard/PokemonCardStyle'
import { getTypes } from '../../utils/ReturnType'
import { ImgCard } from './PokemonDetailStyle'
import { GlobalContext } from '../../context/GlobalContext'

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

  const barColor = (statNumber) => {
    if (statNumber <= 50) {
      return "#ff7c2d";
    } else {
      return "#ffdd6a";
    }
  };

  return (
    <Container >        
      <Header/>
      <DetailPage>
      <Title>Detalhes</Title>
      <Card color={getColors(detalhesPokemon.types && detalhesPokemon.types[0].type.name)}>
      
      <Container2>
            <Sprite src={detalhesPokemon.sprites?.front_default} alt=""/>
            <Sprite src={detalhesPokemon.sprites?.back_default} alt=""/>
      </Container2>

      <BoxBaseStats>
          <TitleBaseStatsMoves>Base stats</TitleBaseStatsMoves>

            <ContainerStats>
              <HrStats></HrStats>
              
              {detalhesPokemon.stats?.map((stat) => {
                return (
                  <>
                    <DivStat key={stat.stat.name}>
                      <TextStats>
                        {stat.stat.name.charAt(0).toUpperCase() +
                          stat.stat.name.slice(1)}
                      </TextStats>
                      <NumberStats>{stat.base_stat}</NumberStats>
                      <DivBar>
                        <BarStats
                          color={barColor(stat.base_stat)}
                          size={stat.base_stat}
                        ></BarStats>
                      </DivBar>
                    </DivStat>

                    <HrStats></HrStats>
                  </>
                );
              })}
              <DivStat>
                <TextTotalStats>Total</TextTotalStats>
                {/* using logical operator to wait for .stats to exist before using it */}
                <NumberTotalStats>
                  {detalhesPokemon.stats && totalStats(detalhesPokemon.stats)}
                </NumberTotalStats>
                <DivBar>
                  {/* use this invisible bar to continue with the right formatting */}
                  <BarStats color={"none"} size={100}></BarStats>
                </DivBar>
              </DivStat>
              <HrStats></HrStats>
            </ContainerStats>
          </BoxBaseStats>

          <SecondDiv>
            <PokemonID>#0{detalhesPokemon.id}</PokemonID>
            <PokemonName>
              {detalhesPokemon.name?.charAt(0).toUpperCase() +
                detalhesPokemon.name?.slice(1)}
            </PokemonName>
            <TypesContainer>
              {detalhesPokemon.types?.map((types) => {
                return (
                  <PokemonType
                    key={types.type.name}
                    src={getTypes(types.type.name)}
                  />
                );
              })}
            </TypesContainer>

            <BoxMoves>
              <TitleBaseStatsMoves>Moves:</TitleBaseStatsMoves>

              {/* select the right quantity of moves to show on page */}
              <DivMoveTypes>
                <TextMoveType>
                  {detalhesPokemon.moves &&
                    detalhesPokemon.moves[0].move.name.charAt(0).toUpperCase() +
                      detalhesPokemon.moves[0].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {detalhesPokemon.moves &&
                    detalhesPokemon.moves[1].move.name.charAt(0).toUpperCase() +
                      detalhesPokemon.moves[1].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {detalhesPokemon.moves &&
                    detalhesPokemon.moves[2].move.name.charAt(0).toUpperCase() +
                      detalhesPokemon.moves[2].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {detalhesPokemon.moves &&
                    detalhesPokemon.moves[3].move.name.charAt(0).toUpperCase() +
                      detalhesPokemon.moves[3].move.name?.slice(1)}
                </TextMoveType>
              </DivMoveTypes>
            </BoxMoves>
          </SecondDiv>
          <ImgCard
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detalhesPokemon.id}.png`}
          />
          </Card>
      </DetailPage>
    </Container>
  )
}

export default PokemonDetailPage