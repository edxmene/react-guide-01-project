import React from "react";
import Button from "../UI/Button/Button";

const Modal = ({ errorTitle, errorMessage, setIsInvalid }) => {
  const closeModal = () => {
    setIsInvalid(false);
  };
  return (
    <div>
      <div className="backdrop" onClick={closeModal} />
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
            onClick={closeModal}
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="toast-body">
          {errorMessage}
          <Button
            text="Close"
            size="btn-sm"
            position="right"
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
