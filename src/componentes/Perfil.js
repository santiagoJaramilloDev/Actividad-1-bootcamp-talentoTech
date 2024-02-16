import React from "react";
import "../estilos/Perfil.css";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <div className="contenedor-imagen">
        <img
          className="imagen-perfil"
          src={props.imagen}
          alt="foto de brais"
        />
      </div>
      <div className="constenedor-descripcion">
        <p className="contenedor-texto-perfil">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-perfil">
          {props.cargo} en {props.empresa}
        </p>
        <p className="resena-perfil">{props.resena}</p>
      </div>
    </div>
  );
}

export default Perfil;
