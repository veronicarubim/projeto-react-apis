import styled from "styled-components";

export const PokemonCardBox = styled.div`

  width: 440px;
  height: 280px;
  left: 0px;
  top: 0px;
  display: flex;
`

export const Container = styled.div`

  width: 440px;
  height: 210px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 10px;
  color: #ffffff;
  padding: 10px;
`;

export const PokemonNumber = styled.p`
  
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
`;

export const PokemonName = styled.h1`
  
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  
  position: absolute;
  width: 440px;
  height: 210px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
`;
export const Pokeball = styled.img`
  
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const DeleteButton = styled.button`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #DB261A;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  background: #FF6262;
  color: #FFFFFF;
`;

export const DetailButton = styled.button`
  
  background: none;
  border: none;
  cursor: pointer;
  width: 74px;
  height: 24px;
  margin-top: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;

`

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;
