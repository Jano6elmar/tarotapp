import { useState } from "react";

// 22 Arcanos Mayores
const arcana = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  img: `${import.meta.env.BASE_URL}assets/arcanos/A${String(i).padStart(
    2,
    "0"
  )}_avec_bordure_W540.png`,
}));

export default function Lecturas() {
  const [deck, setDeck] = useState(arcana);
  const [showDeck, setShowDeck] = useState(false);
  const [selected, setSelected] = useState([]);

  const shuffle = () => {
    const newDeck = [...arcana].sort(() => Math.random() - 0.5);
    setDeck(newDeck);
    setSelected([]);
    setShowDeck(false);
  };

  const handleSelect = (card) => {
    if (selected.length < 3 && !selected.includes(card)) {
      setSelected([...selected, card]);
    }
  };

  // Ángulo para abanico semicircular
  const getRotation = (index, total) => {
    const step = 180 / (total - 1);
    return -90 + step * index;
  };

  const reverseSrc = `${import.meta.env.BASE_URL}assets/reverso/reverso.cartas.png`;

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tirada: Pasado, Presente y Futuro</h1>

      {/* Botones */}
      <div className="flex space-x-4">
        <button
          onClick={shuffle}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow"
        >
          Mezclar
        </button>
        <button
          onClick={() => setShowDeck(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
        >
          Desplegar
        </button>
      </div>

      {/* Mazo cerrado */}
      {!showDeck && selected.length === 0 && (
        <div className="mt-6 text-center">
          <img
            src={reverseSrc}
            alt="Mazo cerrado"
            className="w-32 border-4 border-black rounded-lg shadow-lg"
          />
          <p className="mt-2 text-sm text-gray-700">22 cartas en el mazo</p>
        </div>
      )}

      {/* Abanico semicircular */}
      {showDeck && selected.length < 3 && (
        <div className="relative flex justify-center items-end mt-16 w-full h-[320px]">
          {deck.map((card, i) => {
            const rotation = getRotation(i, deck.length);
            return (
              <img
                key={card.id}
                src={reverseSrc}
                alt={`Carta ${card.id}`}
                className="absolute w-20 border-2 border-black rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform"
                style={{
                  transform: `rotate(${rotation}deg) translateY(120px)`,
                  transformOrigin: "bottom center",
                  left: "50%",
                }}
                onClick={() => handleSelect(card)}
              />
            );
          })}
        </div>
      )}

      {/* Casilleros: Pasado – Presente – Futuro */}
<div className="flex flex-row justify-center items-start gap-12 mt-10 w-full">
  {/* Pasado */}
  <div className="flex flex-col items-center">
    <p className="mb-2 font-bold">Pasado</p>
    <div className="w-32 h-48 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg">
      {selected[0] ? (
        <img
          src={selected[0].img}
          alt="Pasado"
          className="w-full h-full object-cover border-2 border-black rounded-lg shadow-lg"
        />
      ) : (
        <span className="text-xs text-gray-500">Vacío</span>
      )}
    </div>
  </div>

  {/* Presente */}
  <div className="flex flex-col items-center">
    <p className="mb-2 font-bold">Presente</p>
    <div className="w-32 h-48 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg">
      {selected[1] ? (
        <img
          src={selected[1].img}
          alt="Presente"
          className="w-full h-full object-cover border-2 border-black rounded-lg shadow-lg"
        />
      ) : (
        <span className="text-xs text-gray-500">Vacío</span>
      )}
    </div>
  </div>

  {/* Futuro */}
  <div className="flex flex-col items-center">
    <p className="mb-2 font-bold">Futuro</p>
    <div className="w-32 h-48 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg">
      {selected[2] ? (
        <img
          src={selected[2].img}
          alt="Futuro"
          className="w-full h-full object-cover border-2 border-black rounded-lg shadow-lg"
        />
      ) : (
        <span className="text-xs text-gray-500">Vacío</span>
      )}
    </div>
  </div>
</div>

    </div>
  );
}
