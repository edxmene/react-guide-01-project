import React from "react";

const Button = ({ text, type }) => {
  return (
    <div>
      <button type={type} className={`btn btn-danger mt-2`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
