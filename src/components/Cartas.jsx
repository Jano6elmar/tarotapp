import React, { useState } from "react";
import ArcanoModal from "./ArcanoModal";

import arcanosMayores from "../data/arcanosMayores";


// Lista de Arcanos Mayores

export default function Cartas() {
  const [selectedArcano, setSelectedArcano] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Arcanos Mayores</h1>

      <div className="row g-3">
        {arcanosMayores.map((arcano) => (
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
