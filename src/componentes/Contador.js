import { useState } from "react";

export default function Contador({nombre, url}) {
  const [numero, setNumero] = useState(0);

  const aumentar = (url) => {
    setNumero(numero + 1)
    window.open(url, "_blank")
  }
  return (
    <button onClick={() => aumentar(url) }>
      {nombre}
      <span style={{ display: "flex" }}>contador: {numero}</span>
    </button>
  );
}
