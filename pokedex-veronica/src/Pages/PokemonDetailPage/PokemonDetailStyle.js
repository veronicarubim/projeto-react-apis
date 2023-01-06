import styled from "styled-components";

export const Container = styled.div`
`
export const Card = styled.div`
    
    position: relative;
    display: flex;
    margin-top: 180px;
    width: 1389.14px;
    height: 663px;
    left: 0px;
    top: 0px;

    background-color: ${(props) => props.color};
    border-radius: 37.8857px;
`;

export const DetailPage = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1174px;
    background: #5e5e5e;
`

export const Title = styled.h1`
    
    position: absolute;
    width: 420px;
    height: 72px;
    left: 40px;
    top: 220px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    color: #FFFFFF;
    `

export const Imagem = styled.img`

    width: 908.99px;
    height: 908.99px;
    left: 553.49px;
    top: -50px;

    background: url(pngwing);
    opacity: 0.5;
    transform: rotate(30deg);
    `

export const Container2 = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;
    padding-left: 3vw;
`
export const Sprite = styled.img`

    width: 282px;
    height: 282px;
    left: 44px;
    top: 26px;

    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
`
export const BoxBaseStats = styled.div`
    
    align-self: center;
    width: 343px;
    height: 613px;
    left: 360px;
    top: 24px;
    margin-left: 5vh;

    background: #FFFFFF;
    border-radius: 12px;
`
export const TitleBaseStatsMoves = styled.p`
    
    padding: 30px 0 30px 30px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 30px;
`

export const ContainerStats = styled.div`
    
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
`

export const DivStat = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const TextStats = styled.div`
    
    text-align: end;
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    padding-right: 35px;
    color: #939393;
    flex-grow: 1;
`

export const NumberStats = styled.p`
    
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    flex-grow: 0;
    padding-right: 10px;
`

export const DivBar = styled.div`
    
    display: flex;
    justify-content: end;
    width: 100px;
    padding-right: 10px;
`

export const BarStats = styled.div`
    
    background-color: ${(props) => props.color};
    height: 10px;
    border-radius: 8px;
    ${(props) => `
        width: ${props.size}px;
    `}
`

export const HrStats = styled.hr`
  
    opacity: 0.2;
`

export const TextTotalStats = styled.div`
  
    text-align: end;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #939393;
    flex-grow: 1;
`

export const NumberTotalStats = styled.p`
    
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    flex-grow: 0;
    padding-right: 10px;
    padding-left: 29px;
`

export const SecondDiv = styled.div`
  
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`

export const PokemonID = styled.p`
    width: 30px;
    height: 19px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding-top: 5vh;
    padding-bottom: 3vh;
`

export const PokemonName = styled.h1`
  
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
`

export const PokemonType = styled.img`
  
    max-width: 100px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px dashed #ffffff;
    margin-right: 8px;
`

export const TypesContainer = styled.div`
    
    margin-bottom: 52px;
    margin-top: 10px;
    display: flex;
    gap: 5px;
`

export const BoxMoves = styled.div`
    
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 292px;
    height: 453px;
    top: 170px;
    background: #ffffff;
    border-radius: 8px;
`

export const DivMoveTypes = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-left: 30px;
`

export const TextMoveType = styled.p`
  
    font-size: 14px;
    line-height: 17px;
    left: 814px;
    top: 599px;
    background: #ececec;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    padding: 10px;
`

export const ImgCard = styled.img`
    
    width: 200px;
    height: 200px;
    position: absolute;
    top: -60px;
    right: 50px;
    z-index: 2;
`
