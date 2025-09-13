import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import arcanosMenores from "../data/arcanosMenores";
import ArcanoModal from "../components/ArcanoModal";

export default function PaloMenor() {
  const { palo } = useParams();
  const [selectedArcano, setSelectedArcano] = useState(null);

  const cartasDelPalo = arcanosMenores.filter(
    (c) => c.palo.toLowerCase() === palo.toLowerCase()
  );

  if (cartasDelPalo.length === 0) {
    return (
      <div className="container py-4">
        <h2>No se encontraron cartas para "{palo}"</h2>
        <Link to="/arcanos-menores" className="btn btn-secondary mt-3">
          Volver a Arcanos Menores
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Arcanos Menores – {palo}</h1>
      <div className="row g-3">
        {cartasDelPalo.map((arcano) => (
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
                <p className="card-text small fw-bold">{arcano.nombre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArcanoModal arcano={selectedArcano} />
      <div className="mt-4">
        <Link to="/arcanos-menores" className="btn btn-secondary">
          ← Volver a Arcanos Menores
        </Link>
      </div>
    </div>
  );
}
