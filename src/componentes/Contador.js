import { useState } from "react";

export default function Contador(Props) {
  const [youtube, setYoutube] = useState(0);

  const aumentar = (url) => {
    setYoutube(youtube + 1)
    window.open(url, "_blank")
  }
  return (
    <button onClick={() => aumentar(Props.url) }>
      {Props.nombre}
      <span style={{ display: "flex" }}>contador: {youtube}</span>
    </button>
  );
}
