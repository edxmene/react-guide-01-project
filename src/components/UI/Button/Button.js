import React from "react";

const Button = ({ text, type, size }) => {
  return (
    <div>
      <button type={type} className={`btn btn-danger mt-2 ${size}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
