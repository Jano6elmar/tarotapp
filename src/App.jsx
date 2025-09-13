import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Modal } from "bootstrap";

import Home from "./pages/Home";
import ArcanosMayores from "./pages/ArcanosMayores";
import ArcanosMenores from "./pages/ArcanosMenores";
import Lecturas from "./pages/Lecturas";
import PaloMenor from "./pages/PaloMenor";

function AppContent() {
  const location = useLocation();

  // Cierra modales y menú al cambiar de ruta
  useEffect(() => {
    // Cerrar modales abiertos
    const modals = document.querySelectorAll(".modal.show");
    modals.forEach((modalEl) => {
      const modal = Modal.getInstance(modalEl);
      if (modal) modal.hide();
    });

    // Eliminar backdrop de modales
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((bd) => bd.remove());

    // Cerrar menú hamburguesa si estaba abierto
    const navCollapse = document.querySelector(".navbar-collapse.show");
    if (navCollapse) {
      navCollapse.classList.remove("show");
    }
  }, [location]);

  // Manejo manual de la hamburguesa con animación suave
  useEffect(() => {
    const toggler = document.querySelector(".navbar-toggler");
    const navCollapse = document.querySelector("#navbarNav");

    const handleToggle = () => {
      if (navCollapse.classList.contains("show")) {
        // cerrar con animación
        navCollapse.classList.remove("show");
        navCollapse.classList.add("collapsing-custom");
        setTimeout(() => {
          navCollapse.classList.remove("collapsing-custom");
        }, 300); // mismo tiempo que el CSS transition
      } else {
        // abrir con animación
        navCollapse.classList.add("collapsing-custom");
        setTimeout(() => {
          navCollapse.classList.remove("collapsing-custom");
          navCollapse.classList.add("show");
        }, 10);
      }
    };

    if (toggler) {
      toggler.addEventListener("click", handleToggle);
    }

    return () => {
      if (toggler) {
        toggler.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Tarot App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

      <div className="pt-5 mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arcanos-mayores" element={<ArcanosMayores />} />
          <Route path="/arcanos-menores" element={<ArcanosMenores />} />
          <Route path="/arcanos-menores/:palo" element={<PaloMenor />} />
          <Route path="/lecturas" element={<Lecturas />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
