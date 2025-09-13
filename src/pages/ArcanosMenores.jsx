import React from "react";
import { Link } from "react-router-dom";
import arcanosMenores from "../data/arcanosMenores";

export default function ArcanosMenores() {
  const palos = ["Bastos", "Copas", "Espadas", "Oros"];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Arcanos Menores</h1>

      <div className="row g-3">
        {palos.map((palo) => {
          // buscar el As de cada palo
          const asDelPalo = arcanosMenores.find(
            (c) => c.palo === palo && c.nombre.startsWith("As")
          );

          return (
            <div key={palo} className="col-6 col-sm-3 text-center">
              <Link
                to={`/arcanos-menores/${palo.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card h-100">
                  <img
                    src={asDelPalo.imagen}
                    alt={palo}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body p-2">
                    <p className="card-text small fw-bold">{palo}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
