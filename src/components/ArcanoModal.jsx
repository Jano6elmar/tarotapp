import React, { useRef, useEffect } from "react";

export default function ArcanoModal({ arcano }) {
  const descRef = useRef(null);

  const scrollToDesc = () => {
    if (descRef.current) {
      descRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 FIX: Limpieza de estilos cuando el modal se cierra
  useEffect(() => {
    const modalElement = document.getElementById("arcanoModal");
    
    if (!modalElement) return;

    const handleModalHidden = () => {
      // Limpieza de estilos
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("modal-open");
      
      const backdrops = document.querySelectorAll(".modal-backdrop");
      backdrops.forEach((bd) => bd.remove());
    };

    modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
    };
  }, []);

  return (
    <div 
      className="modal fade" 
      id="arcanoModal" 
      tabIndex="-1" 
      aria-hidden="true"
      data-bs-backdrop="true"
      data-bs-keyboard="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {arcano ? (
            <>
              {/* Header */}
              <div className="modal-header p-3 d-flex justify-content-between align-items-center">
                <h5 className="modal-title m-0">{arcano.nombre}</h5>
                <div className="d-flex gap-2 align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={scrollToDesc}
                  >
                    📖 Descripción
                  </button>
                  <button
                    type="button"
                    className="btn-close btn-close-lg"
                    data-bs-dismiss="modal"
                    aria-label="Cerrar"
                    style={{ fontSize: '1.2rem', padding: '0.5rem' }}
                  ></button>
                </div>
              </div>

              {/* Imagen grande */}
              <div className="text-center p-2">
                <img
                  src={arcano.imagen}
                  alt={arcano.nombre}
                  className="img-fluid"
                  style={{ maxHeight: "65vh", objectFit: "contain" }}
                />
              </div>

              {/* Descripción con scroll */}
              {arcano.descripcion && (
                <div
                  ref={descRef}
                  className="px-3 pb-3"
                  style={{
                    maxHeight: "30vh",
                    overflowY: "auto",
                  }}
                >
                  <p style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
                    {arcano.descripcion}
                  </p>
                </div>
              )}

              {/* Botón de cerrar grande para móviles */}
              <div className="modal-footer d-md-none border-0 pt-0">
                <button
                  type="button"
                  className="btn btn-primary w-100 py-2"
                  data-bs-dismiss="modal"
                >
                  ✓ Cerrar
                </button>
              </div>
            </>
          ) : (
            <div className="modal-body">Sin carta seleccionada.</div>
          )}
        </div>
      </div>
    </div>
  );
}
