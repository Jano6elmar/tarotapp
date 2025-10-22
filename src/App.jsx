import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import ArcanosMayores from "./pages/ArcanosMayores";
import ArcanosMenores from "./pages/ArcanosMenores";
import Lecturas from "./pages/Lecturas";
import PaloMenor from "./pages/PaloMenor";
import ChatMistral from "./components/ChatMistral";

function AppContent() {
  const location = useLocation();

  // 🔹 Cierra modales y menú al cambiar de ruta
  useEffect(() => {
    // Cerrar modales abiertos
    const modals = document.querySelectorAll(".modal.show");
    modals.forEach((modalEl) => {
      const modal = window.bootstrap?.Modal.getInstance(modalEl);
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

    // 🔥 FIX: Asegurar que el body tenga scroll habilitado
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.classList.remove("modal-open");
  }, [location]);

  // 🔹 Cierra el menú hamburguesa al hacer click en un link del nav
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navCollapse = document.querySelector("#navbarNav");

    const handleClick = () => {
      if (navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TarotMarsellApp
          </Link>
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
              <li className="nav-item">
                <Link className="nav-link" to="/chat-mistral">
                  Chat Mistral
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="pt-5 mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat-mistral" element={<ChatMistral />} />

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
  // Configurar basename según el entorno
  const basename = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}
