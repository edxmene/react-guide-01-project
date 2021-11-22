import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card mt-5 container">
      <div className="card-body">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Card;
