import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ArcanoModal from "./components/ArcanoModal";

  const arcanos = [
  { id: 0, nombre: "El Loco", imagen: import.meta.env.BASE_URL + "assets/arcanos/A00_avec_bordure_W540.png" },
  { id: 1, nombre: "El Mago", imagen: import.meta.env.BASE_URL + "assets/arcanos/A01_avec_bordure_W540.png" },
  { id: 2, nombre: "La Papisa", imagen: import.meta.env.BASE_URL + "assets/arcanos/A02_avec_bordure_W540.png" },
  { id: 3, nombre: "La Emperatriz", imagen: import.meta.env.BASE_URL + "assets/arcanos/A03_avec_bordure_W540.png" },
  { id: 4, nombre: "El Emperador", imagen: import.meta.env.BASE_URL + "assets/arcanos/A04_avec_bordure_W540.png" },
  { id: 5, nombre: "El Papa", imagen: import.meta.env.BASE_URL + "assets/arcanos/A05_avec_bordure_W540.png" },
  { id: 6, nombre: "Los Enamorados", imagen: import.meta.env.BASE_URL + "assets/arcanos/A06_avec_bordure_W540.png" },
  { id: 7, nombre: "El Carro", imagen: import.meta.env.BASE_URL + "assets/arcanos/A07_avec_bordure_W540.png" },
  { id: 8, nombre: "La Justicia", imagen: import.meta.env.BASE_URL + "assets/arcanos/A08_avec_bordure_W540.png" },
  { id: 9, nombre: "El Ermitaño", imagen: import.meta.env.BASE_URL + "assets/arcanos/A09_avec_bordure_W540.png" },
  { id: 10, nombre: "La Rueda de la Fortuna", imagen: import.meta.env.BASE_URL + "assets/arcanos/A10_avec_bordure_W540.png" },
  { id: 11, nombre: "La Fuerza", imagen: import.meta.env.BASE_URL + "assets/arcanos/A11_avec_bordure_W540.png" },
  { id: 12, nombre: "El Colgado", imagen: import.meta.env.BASE_URL + "assets/arcanos/A12_avec_bordure_W540.png" },
  { id: 13, nombre: "La Muerte", imagen: import.meta.env.BASE_URL + "assets/arcanos/A13_avec_bordure_W540.png" },
  { id: 14, nombre: "La Templanza", imagen: import.meta.env.BASE_URL + "assets/arcanos/A14_avec_bordure_W540.png" },
  { id: 15, nombre: "El Diablo", imagen: import.meta.env.BASE_URL + "assets/arcanos/A15_avec_bordure_W540.png" },
  { id: 16, nombre: "La Torre", imagen: import.meta.env.BASE_URL + "assets/arcanos/A16_avec_bordure_W540.png" },
  { id: 17, nombre: "La Estrella", imagen: import.meta.env.BASE_URL + "assets/arcanos/A17_avec_bordure_W540.png" },
  { id: 18, nombre: "La Luna", imagen: import.meta.env.BASE_URL + "assets/arcanos/A18_avec_bordure_W540.png" },
  { id: 19, nombre: "El Sol", imagen: import.meta.env.BASE_URL + "assets/arcanos/A19_avec_bordure_W540.png" },
  { id: 20, nombre: "El Juicio", imagen: import.meta.env.BASE_URL + "assets/arcanos/A20_avec_bordure_W540.png" },
  { id: 21, nombre: "El Mundo", imagen: import.meta.env.BASE_URL + "assets/arcanos/A21_avec_bordure_W540.png" },
];

  

export default function App() {
  const [selectedArcano, setSelectedArcano] = useState(null);

  return (
    
    <div className="container py-4">
      <h1 className="text-center mb-4">Arcanos Mayores</h1>

      <div className="row g-3">
        {arcanos.map((arcano) => (
          <div key={arcano.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div
  className="card h-100"
  role="button"
  data-bs-toggle="modal"
  data-bs-target="#arcanoModal"
  onClick={() => setSelectedArcano(arcano)}
>
  <img
    src={arcano.imagen}
    alt={arcano.nombre}
    className="card-img-top img-fluid"
  />
  <div className="card-body p-2">
    <p className="card-text fw-bold small">{arcano.nombre}</p>
  </div>
</div>
          </div>
        ))}
      </div>
      <ArcanoModal arcano={selectedArcano} />

    </div>
    
  );
  
}