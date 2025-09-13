import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArcanosMayores from "./pages/ArcanosMayores";
import ArcanosMenores from "./pages/ArcanosMenores";
import PaloMenor from "./pages/PaloMenor";

import Lecturas from "./pages/Lecturas";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            Tarot App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/arcanos-mayores" onClick={closeMenu}>
                  Arcanos Mayores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/arcanos-menores" onClick={closeMenu}>
                  Arcanos Menores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lecturas" onClick={closeMenu}>
                  Lecturas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arcanos-mayores" element={<ArcanosMayores />} />
          <Route path="/arcanos-menores" element={<ArcanosMenores />} />
          <Route path="/arcanos-menores/:palo" element={<PaloMenor />} />

          <Route path="/lecturas" element={<Lecturas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
