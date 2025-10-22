import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      {/* Sección de Bienvenida */}
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold text-primary mb-3">
          ✨ Bienvenido a TarotMarsellApp ✨
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Descubre los secretos del tarot, explora los arcanos y obtén respuestas
          a tus preguntas más profundas. Tu camino hacia el autoconocimiento
          comienza aquí.
        </p>
        <hr className="my-4" style={{ width: "150px", margin: "0 auto", height: "3px" }} />
      </div>

      {/* Tarjetas de Navegación */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        {/* Arcanos Mayores */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <span className="display-4">🌟</span>
              </div>
              <h5 className="card-title text-center fw-bold">Arcanos Mayores</h5>
              <p className="card-text text-center text-muted flex-grow-1">
                Explora los 22 arcanos mayores del tarot y su profundo significado.
              </p>
              <Link
                to="/arcanos-mayores"
                className="btn btn-primary w-100 mt-3"
              >
                Explorar
              </Link>
            </div>
          </div>
        </div>

        {/* Arcanos Menores */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <span className="display-4">🎴</span>
              </div>
              <h5 className="card-title text-center fw-bold">Arcanos Menores</h5>
              <p className="card-text text-center text-muted flex-grow-1">
                Descubre los 4 palos: Copas, Espadas, Oros y Bastos.
              </p>
              <Link
                to="/arcanos-menores"
                className="btn btn-primary w-100 mt-3"
              >
                Explorar
              </Link>
            </div>
          </div>
        </div>

        {/* Lecturas */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <span className="display-4">🔮</span>
              </div>
              <h5 className="card-title text-center fw-bold">Lecturas</h5>
              <p className="card-text text-center text-muted flex-grow-1">
                Realiza una tirada de 3 cartas y obtén tu lectura.
              </p>
              <Link
                to="/lecturas"
                className="btn btn-primary w-100 mt-3"
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>

        {/* Chat Mistral */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0 hover-card">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <span className="display-4">💬</span>
              </div>
              <h5 className="card-title text-center fw-bold">Chat Mistral</h5>
              <p className="card-text text-center text-muted flex-grow-1">
                Conversa con la IA para obtener orientación personalizada.
              </p>
              <Link
                to="/chat-mistral"
                className="btn btn-primary w-100 mt-3"
              >
                Chatear
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Informativa */}
      <div className="row mt-5">
        <div className="col-lg-10 mx-auto">
          <div className="card border-0 bg-light shadow-sm">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">¿Qué encontrarás en esta app?</h3>
              <div className="row">
                <div className="col-md-4 text-center mb-3">
                  <h5 className="text-primary">📚 Biblioteca Completa</h5>
                  <p className="text-muted">
                    Accede a todos los arcanos mayores y menores con sus significados.
                  </p>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <h5 className="text-primary">🎯 Lecturas Personalizadas</h5>
                  <p className="text-muted">
                    Realiza tiradas de cartas para obtener respuestas a tus inquietudes.
                  </p>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <h5 className="text-primary">🤖 Asistente IA</h5>
                  <p className="text-muted">
                    Consulta con Mistral para profundizar en tus lecturas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
