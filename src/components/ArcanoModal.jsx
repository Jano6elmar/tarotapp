import React from "react";

export default function ArcanoModal({ arcano }) {
  return (
    <div className="modal fade" id="arcanoModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {arcano ? (
            <>
              <div className="modal-header">
                <h5 className="modal-title">{arcano.nombre}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src={arcano.imagen} alt={arcano.nombre} className="img-fluid" />
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