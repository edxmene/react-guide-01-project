import React from "react";
import Button from "../UI/Button/Button";

const Modal = () => {
  return (
    <div>
      <div className="backdrop" />
      <div
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            id="Close-button"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
          <Button text={"Close"} size={"btn-sm"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
