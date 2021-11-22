import React from "react";
import Button from "../../UI/Button/Button";

const InputUser = () => {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1" className="form-label">
        <strong>Username</strong>
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      />
      <label for="exampleInputEmail1" className="form-label mt-2">
        <strong>Age (Years)</strong>
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      />
      <Button />
    </div>
  );
};

export default InputUser;
