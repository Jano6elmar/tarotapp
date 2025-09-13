import React, { useRef } from "react";

export default function ArcanoModal({ arcano }) {
  const descRef = useRef(null);

  const scrollToDesc = () => {
    if (descRef.current) {
      descRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="modal fade" id="arcanoModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {arcano ? (
            <>
              {/* Header */}
              <div className="modal-header p-2 d-flex justify-content-between align-items-center">
                <h5 className="modal-title m-0">{arcano.nombre}</h5>
                <div className="d-flex gap-2 align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={scrollToDesc}
                  >
                    Descripción
                  </button>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
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
            </>
          ) : (
            <div className="modal-body">Sin carta seleccionada.</div>
          )}
        </div>
      </div>
    </div>
  );
}
