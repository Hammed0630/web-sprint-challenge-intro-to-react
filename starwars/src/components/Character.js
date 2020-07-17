// Write your Character component here
import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  background-color: #B0C4DE;
  border: solid 1px grey;
  border-radius: 2%;
  width: 29%;
  margin: 2% 0;
  padding: 3%;
  box-shadow: 4px 4px black;
  color: black;
  h2 {
    color: #1e1b18;
  }
  .yellow {
    color: yellow;
  }
  .green {
    color: green;
  }
  .spieces {
    color: blue;
  }
  .red{
      color: red;

  }
`;

const StyledImg = styled.img`
  border: grey solid 2px;
  border-radius: 4%;
  max-width: 100%;
`;


const Cards = (props) => {
  const { data } = props;
  function colorChange (type){
      if (type == "unknown" ){
          return "spieces"
          }
    else if (type == "Alive") {
        return "green"
    }
    else {
        return "red"
    }
  }

  return (
    <div>
      {data.map((character) => {
        return (
          <StyledDiv>
            <Card>
              <h2>{character.name}</h2>
              <h3 className="yellow">Gender: {character.gender}</h3>
              <h3 className={colorChange(character.status)} > Status: {character.status}</h3>
              <h3 className="spieces"> Spieces: {character.species}</h3>
              <h3> Location: {character.location.name}</h3>

              <StyledImg src={character.image}></StyledImg>
            </Card>
          </StyledDiv>
        );
      })}
    </div>
  );
};

export default Cards;
