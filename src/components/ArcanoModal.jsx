import React from "react";

export default function ArcanoModal({ arcano }) {
  return (
    <div className="modal fade" id="arcanoModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {arcano ? (
            <>
              {/* Header más compacto */}
              <div className="modal-header p-2">
                <h5 className="modal-title m-0">{arcano.nombre}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              {/* Imagen más grande */}
              <div className="modal-body p-0 text-center">
                <img
                  src={arcano.imagen}
                  alt={arcano.nombre}
                  className="img-fluid"
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
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
