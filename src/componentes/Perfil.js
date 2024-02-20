import React from "react";
import "../estilos/Perfil.css";
import Contador from "./Contador";

function Perfil(props) {

  const { imagen, nombre, pais, cargo, empresa, resena, urlYoutube, urlTwitter, urlLinkedin } = props;
  return (
    <div className="contenedor-perfil">
      <div className="contenedor-imagen">
        <img className="imagen-perfil" src={ imagen } alt="foto de brais" />
      </div>
      <div className="constenedor-descripcion">
        <p className="contenedor-texto-perfil">
          { nombre } en { pais }
        </p>
        <p className="cargo-perfil">
          { cargo } en { empresa }
        </p>
        <p className="resena-perfil">{ resena }</p>
        <div>
          <Contador nombre={"Seguir en youtube"} url={urlYoutube} />
          <Contador nombre={"Seguir en twitter "} url={urlTwitter} />
          <Contador nombre={"Seguir en linkedin "} url={urlLinkedin} />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
