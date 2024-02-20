import "./App.css";
import Perfil from "./componentes/Perfil";

const users = [
  {
    nombre: "Fazt Code",
    pais: "Peru",
    cargo: "Director",
    empresa: "FaztTech",
    imagen: "assets/images/fatz.jpg",
    resena: "FaztCode es un canal de programacion, tutoriales y proyectos web, en donde podras encontrar ejemplos prácticos de lenguajes y tecnologías com Python, Javascript, Go, Rust, Typescript, Django, Nodejs, Flutter, React, React Native, Expressjs, Mongodb, MySQL, PostgreSQL, GraphQL, REST API, y muchas más",
    urlYoutube: "https://www.youtube.com/@FaztTech",
    urlTwitter: "https://twitter.com/FaztTech",
    urlLinkedin: "https://www.linkedin.com/company/fazttech/"
  },
  {
    nombre: "Miguel Ángel Durán García",
    pais: "España",
    cargo: "Director",
    empresa: "midudev ",
    imagen: "assets/images/midudev.png",
    resena: "Creador de Contenido sobre Programación y Tecnología además de Ingeniero de Software, con más de 15 años de experiencia. Cuenta con una comunidad de más de 700k de seguidores en sus redes sociales",
    urlYoutube: "https://www.youtube.com/@midulive",
    urlTwitter: "https://twitter.com/midudev",
    urlLinkedin: "https://www.linkedin.com/company/midudev/about/"
  },
  {
    nombre: "codigofacilito",
    pais: "Mexico",
    cargo: "CodigoFacilito",
    empresa: "Sombreros de paja",
    imagen: "assets/images/codigofacilito.png",
    resena: "Esta plataforma de origen mexicano facilita cursos gratis de programación a la población de habla hispana, con herramientas, metodologías y mecanismos sumamente efectivos. Esta propuesta educativa se encuentra en línea desde el año 2010, y actualmente cuenta con más de 600 mil estudiantes",
    urlYoutube: "https://www.youtube.com/@codigofacilito",
    urlTwitter: "https://twitter.com/codigofacilito",
    urlLinkedin: "https://www.linkedin.com/school/codigofacilito/"
  },
];

function App() {
  return (
    <div className="App">
      <div style={{background: "cadetblue"}}>
        <h1>Canales de desarrollo de software:</h1>
        <div style={{ padding: "20px 20px" }}>
          {users.map((user) => (
            <Perfil
              key={user.nombre}
              nombre={user.nombre}
              pais={user.pais}
              cargo={user.cargo}
              empresa={user.empresa}
              resena={user.resena}
              imagen={user.imagen}
              urlYoutube={user.urlYoutube}
              urlTwitter={user.urlTwitter}
              urlLinkedin={user.urlLinkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
