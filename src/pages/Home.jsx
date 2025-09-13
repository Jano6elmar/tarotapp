import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenido a la aplicación de Tarot</h1>
      <p>Desde aquí accedes a los Arcanos Mayores.</p>
      <p>
        <Link to="/arcanos-mayoress">Ir a Arcanos Mayores →</Link>
      </p>
    </div>
  );
}

export default Home;
