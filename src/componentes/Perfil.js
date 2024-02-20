import React from "react";
import "../estilos/Perfil.css";
import Contador from "./Contador";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <div className="contenedor-imagen">
        <img className="imagen-perfil" src={props.imagen} alt="foto de brais" />
      </div>
      <div className="constenedor-descripcion">
        <p className="contenedor-texto-perfil">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-perfil">
          {props.cargo} en {props.empresa}
        </p>
        <p className="resena-perfil">{props.resena}</p>
        <div>
          <Contador nombre={"Seguir en youtube"} url={"https://www.youtube.com/"} />
          <Contador nombre={"Seguir en twitter "} url={"https://twitter.com/?lang=es"} />
          <Contador nombre={"Seguir en linkedin "} url={"https://www.linkedin.com/feed/"} />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
