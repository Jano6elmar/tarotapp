import React from "react";

export default function Abanico({ cartas, reverso, onSeleccion }) {
  const ALTURA = 500; // alto del contenedor
  const RADIO = 250;  // distancia desde el centro

  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center w-100 overflow-hidden"
      style={{ height: ALTURA }}
    >
      {Array.isArray(cartas) &&
        cartas.map((carta, i) => {
          const angle =
            cartas.length > 1
              ? -90 + (180 / (cartas.length - 1)) * i
              : 0;
          const baseTransform = `rotate(${angle}deg) translateX(${RADIO}px) rotate(-${angle}deg)`;

          return (
            <img
              key={carta?.id ?? i}
              src={reverso}
              alt={carta?.nombre ?? `Carta ${i + 1}`}
              className="position-absolute rounded shadow img-fluid"
              style={{
                width: "6rem",
                height: "10rem",
                transform: baseTransform,
                transformOrigin: "center center",
                zIndex: i,
                cursor: "pointer",
                transition: "transform .2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  baseTransform + " scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = baseTransform)
              }
              onClick={() => onSeleccion && onSeleccion(carta)}
            />
          );
        })}
    </div>
  );
}
