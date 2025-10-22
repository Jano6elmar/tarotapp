import React, { useRef, useEffect } from "react";

export default function ArcanoModal({ arcano }) {
  const descRef = useRef(null);

  const scrollToDesc = () => {
    if (descRef.current) {
      descRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 FIX: Manejar el botón de retroceso del navegador
  useEffect(() => {
    const modalElement = document.getElementById("arcanoModal");
    
    if (!modalElement) return;

    let isClosingFromBackButton = false;

    const handleModalShow = () => {
      // Agregar una entrada al historial cuando se abre el modal
      window.history.pushState({ modalOpen: true }, "");
    };

    const handleModalHide = () => {
      // Solo retroceder si NO se está cerrando por el botón de retroceso
      if (!isClosingFromBackButton && window.history.state?.modalOpen) {
        window.history.back();
      }
      isClosingFromBackButton = false;
    };

    const handleModalHidden = () => {
      // 🔥 FIX: Asegurar limpieza de estilos cuando el modal se cierra completamente
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("modal-open");
      
      // Eliminar backdrop residual
      const backdrops = document.querySelectorAll(".modal-backdrop");
      backdrops.forEach((bd) => bd.remove());
    };

    const handlePopState = (event) => {
      // Si el modal está abierto y se presiona retroceso, cerrarlo
      const modal = window.bootstrap?.Modal.getInstance(modalElement);
      if (modal && modalElement.classList.contains("show")) {
        isClosingFromBackButton = true;
        modal.hide();
        
        // 🔥 FIX: Limpiar estilos del body después de cerrar
        setTimeout(() => {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
          document.body.classList.remove("modal-open");
          
          // Eliminar backdrop residual
          const backdrops = document.querySelectorAll(".modal-backdrop");
          backdrops.forEach((bd) => bd.remove());
        }, 100);
      }
    };

    // Escuchar eventos del modal
    modalElement.addEventListener("show.bs.modal", handleModalShow);
    modalElement.addEventListener("hide.bs.modal", handleModalHide);
    modalElement.addEventListener("hidden.bs.modal", handleModalHidden);
    window.addEventListener("popstate", handlePopState);

    return () => {
      modalElement.removeEventListener("show.bs.modal", handleModalShow);
      modalElement.removeEventListener("hide.bs.modal", handleModalHide);
      modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
