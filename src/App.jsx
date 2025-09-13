import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArcanosMayores from "./pages/ArcanosMayores";
import ArcanosMenores from "./pages/ArcanosMenores";
import Lecturas from "./pages/Lecturas";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Marca */}
          <Link className="navbar-brand" to="/">
            Tarot App
          </Link>

          {/* Botón hamburguesa (izquierda al lado del logo) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links colapsables (alineados a la derecha) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/arcanos-mayores">
                  Arcanos Mayores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/arcanos-menores">
                  Arcanos Menores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lecturas">
                  Lecturas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Margen para que el contenido no quede tapado */}
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arcanos-mayores" element={<ArcanosMayores />} />
          <Route path="/arcanos-menores" element={<ArcanosMenores />} />
          <Route path="/lecturas" element={<Lecturas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
