import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Bienvenido a la aplicación de Tarot</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 justify-content-center">
        {/* Arcanos Mayores */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Arcanos Mayores</h5>
                <p className="card-text">Explora los 22 arcanos mayores.</p>
              </div>
              <Link
                to="/arcanos-mayores"
                className="btn btn-primary mt-3 align-self-start"
              >
                Ir a Arcanos Mayores →
              </Link>
            </div>
          </div>
        </div>

        {/* Arcanos Menores */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Arcanos Menores</h5>
                <p className="card-text">Copas, Espadas, Oros y Bastos.</p>
              </div>
              <Link
                to="/arcanos-menores"
                className="btn btn-primary mt-3 align-self-start"
              >
                Ir a Arcanos Menores →
              </Link>
            </div>
          </div>
        </div>

        {/* Lecturas */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Lecturas</h5>
                <p className="card-text">Haz una tirada de 3 cartas.</p>
              </div>
              <Link
                to="/lecturas"
                className="btn btn-primary mt-3 align-self-start"
              >
                Ir a Lecturas →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
