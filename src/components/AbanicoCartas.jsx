import React from "react";

export default function Abanico({ cartas, reverso, onSeleccion }) {
  return (
    <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
      {cartas.map((carta, i) => {
        const angle = -90 + (180 / (cartas.length - 1)) * i; // abanico 180°
        return (
          <img
            key={carta.id}
            src={reverso}
            alt={carta.nombre}
            className="absolute w-24 h-40 rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform"
            style={{
              transform: `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg)`,
              transformOrigin: "center center",
              zIndex: i,
            }}
            onClick={() => onSeleccion(carta)}
          />
        );
      })}
    </div>
  );
}
