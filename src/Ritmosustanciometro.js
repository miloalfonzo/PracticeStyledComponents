import React from "react";
import styled from "styled-components";

import { carga, aparecerDeAbajo } from "./animaciones";

const Contenedor = styled.div`
  width: 100%;
  height: 36px;
  margin: 6px 0;
  animation: ${aparecerDeAbajo} 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid grey;

  .barra {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: hsl(${props => props.ritmosustancia}, 100%, 50%);
    width: ${props => props.ritmosustancia}%;
    animation: ${props => carga(props.ritmosustancia)} 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  .cantidad {
    z-index: 1;
  }
`;

const Ritmosustanciometro = ({ nombre, ritmosustancia }) => {
  return (
    <Contenedor ritmosustancia={ritmosustancia}>
      <div className="cantidad">
        {nombre}: {ritmosustancia}
      </div>
      <div className="barra" />
    </Contenedor>
  );
};

export default Ritmosustanciometro;
