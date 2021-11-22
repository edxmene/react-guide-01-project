import React from "react";
import { Container } from "react-bootstrap";

const Button = ({ text, type, size, position }) => {
  return (
    <div>
      <button type={type} className={`btn btn-danger mt-2 ${size} ${position}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
