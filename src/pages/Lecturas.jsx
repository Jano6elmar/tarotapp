import React, { useState, useEffect } from "react";
import backCard from "/assets/reverso/reverso.cartas.png";
import arcanosMayores from "../data/arcanosMayores";

const Lecturas = () => {
  const [cartas, setCartas] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [mostrarMazo, setMostrarMazo] = useState(true);
  const [flipped, setFlipped] = useState({});
  const [shuffling, setShuffling] = useState(false);

  // 🔥 FIX: Asegurar scroll habilitado al montar componente
  useEffect(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.classList.remove("modal-open");
  }, []);

  // Mezclar y desplegar cartas
  const mezclarYDesplegar = () => {
    setShuffling(true); // activa animación

    const cartasMezcladas = [...arcanosMayores].sort(() => Math.random() - 0.5);

    // espera a que termine animación antes de mostrar el nuevo orden
    setTimeout(() => {
      setCartas(cartasMezcladas);
      setSeleccionadas([]);
      setFlipped({});
      setMostrarMazo(false);
      setShuffling(false);
    }, 1000);
  };

  // Seleccionar carta
  const seleccionarCarta = (carta) => {
    if (seleccionadas.length < 3 && !seleccionadas.includes(carta)) {
      setFlipped({ ...flipped, [carta.id]: true });

      setTimeout(() => {
        setSeleccionadas([...seleccionadas, carta]);
        setCartas(cartas.filter((c) => c.id !== carta.id));
      }, 800);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Bloque Mazo */}
        <div className="col-3 text-center border-end">
          {mostrarMazo && (
            <div
              className="position-relative d-inline-block"
              style={{ height: "200px", marginLeft: "-30px" }}
            >
              {[...Array(10)].map((_, i) => (
                <img
                  key={i}
                  src={backCard}
                  alt="Mazo"
                  className="position-absolute shadow-sm"
                  style={{
                    top: i * 2,
                    left: i * 2,
                    width: "120px",
                    borderRadius: "8px",
                    zIndex: i,
                  }}
                />
              ))}
            </div>
          )}

          <div className="mt-3">
            <button onClick={mezclarYDesplegar} className="btn btn-primary">
              Mezclar y Desplegar
            </button>
          </div>
        </div>

        {/* Bloque Cartas Superpuestas */}
        <div className="col-9 text-center">
          <div
            id="abanico"
            className="position-relative d-flex justify-content-center mt-3"
            style={{ height: "260px" }}
          >
            {cartas.map((carta, index) => (
              <div
                key={carta.id}
                className={`position-absolute ${
                  shuffling ? "shuffle-card" : ""
                }`}
                style={{
                  animationDelay: shuffling ? `${index * 50}ms` : "0s",
                  left: `${index * 35}px`,
                  transform: `rotate(${
                    index * 5 - (cartas.length * 2.5)
                  }deg) translateY(-20px)`,
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  perspective: "1000px",
                }}
                onMouseEnter={(e) => {
                  if (!shuffling) {
                    e.currentTarget.style.transform = `rotate(${
                      index * 5 - (cartas.length * 2.5)
                    }deg) translateY(-40px) scale(1.1)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!shuffling) {
                    e.currentTarget.style.transform = `rotate(${
                      index * 5 - (cartas.length * 2.5)
                    }deg) translateY(-20px) scale(1)`;
                  }
                }}
                onClick={() => seleccionarCarta(carta)}
              >
                <div
                  style={{
                    width: "120px",
                    height: "200px",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s",
                    transform: flipped[carta.id]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Reverso */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={backCard}
                      alt="Reverso"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        border: "1px solid black",
                      }}
                    />
                  </div>

                  {/* Frente */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={carta.imagen}
                      alt={carta.nombre}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloque Tirada */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <div className="d-flex justify-content-center mt-3">
            {seleccionadas.map((carta) => (
              <div
                key={carta.id}
                className="mx-3"
                style={{
                  width: "150px",
                  height: "250px",
                  perspective: "1000px",
                }}
              >
                <div
                  className="shadow-sm"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    border: "1px solid black",
                  }}
                >
                  <img
                    src={carta.imagen}
                    alt={carta.nombre}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecturas;
