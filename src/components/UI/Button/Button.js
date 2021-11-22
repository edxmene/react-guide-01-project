import React from "react";

const Button = ({ text, type, size, position, closeModal }) => {
  return (
    <div>
      <button
        type={type}
        className={`btn btn-danger mt-2 ${size} ${position}`}
        onClick={closeModal}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
