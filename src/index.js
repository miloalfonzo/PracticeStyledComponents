import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styled from "styled-components";

import Ritmosustanciometro from "./Ritmosustanciometro";

import "./styles.css";

const Contenedor = styled.div`
  width: 100%;
  max-width: 640px;
`;

function App() {
  const [nombre, setNombre] = useState("");
  const [individuos, setIndividuos] = useState([
    {
      nombre: "Hernan",
      ritmosustancia: 100
    }
  ]);

  function actualizarNombre(event) {
    setNombre(event.target.value);
  }

  async function obtenerRitmosustancia(event) {
    event.preventDefault();

    const ritmosustancia = await axios(
      "https://wt-3581e5a0e6c19bb4a0552203b2738a9d-0.run.webtask.io/obtener-ritmosustancia/"
    ).then(res => res.data);

    setIndividuos(
      individuos.concat({
        nombre,
        ritmosustancia
      })
    );
    setNombre("");
  }

  return (
    <Contenedor>
      <h1> Ritmosustanciometro </h1>
      {individuos.map(individuo => (
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      ))}
      <form onSubmit={obtenerRitmosustancia}>
        <input type="text" onChange={actualizarNombre} value={nombre} />
        <button type="submit"> Obtener ritmosustancia </button>
      </form>
    </Contenedor>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
