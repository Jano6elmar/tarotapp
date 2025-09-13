import React from "react";

export default function ArcanoModal({ arcano }) {
  return (
    <div className="modal fade" id="arcanoModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {arcano ? (
            <>
              <div className="modal-header p-2">
                <h5 className="modal-title m-0">{arcano.nombre}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              {/* Scroll interno */}
              <div
                className="modal-body p-0 text-center"
                style={{ maxHeight: "75vh", overflowY: "auto" }}
              >
                <img
                  src={arcano.imagen}
                  alt={arcano.nombre}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "40vh", objectFit: "contain" }}
                />
                {arcano.descripcion && (
                  <p className="px-3 text-start" style={{ whiteSpace: "pre-line" }}>
                    {arcano.descripcion}
                  </p>
                )}
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
