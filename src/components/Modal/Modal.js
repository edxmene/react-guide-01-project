import React from "react";
import { createPortal } from "react-dom";

const Brackdrop = ({ setError }) => {
  return <div className="backdrop" onClick={() => setError(null)} />;
};

const ModalOverLay = ({ errorTitle, errorMessage, setError }) => {
  return (
    <div
      className="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <h5>
          <strong className="me-auto">{errorTitle}</strong>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          id="Close-button"
          onClick={() => setError(null)}
        >
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="toast-body">
        {errorMessage}
        <button
          className={`btn btn-danger mt-2 btn-sm right`}
          onClick={() => setError(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Modal = ({ errorTitle, errorMessage, setError }) => {
  return (
    <>
      {createPortal(
        <Brackdrop setError={setError} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverLay
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          setError={setError}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
