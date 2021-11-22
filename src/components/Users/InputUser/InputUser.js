import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Modal from "../../Modal/Modal";

const InputUser = ({ addUser }) => {
  const [userInput, setUserInput] = useState("");
  const [userAge, setUserAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsers = {
      id: Date.now(),
      username: userInput,
      age: parseInt(userAge),
    };
    addUser(newUsers);
  };
  return (
    <div>
      <Modal
        errorTitle={"An error occurred!"}
        errorMessage={"Something went wrong"}
      />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <label htmlFor="age" className="form-label mt-2">
            <strong>Age (Years)</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
            placeholder="Enter age"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
        </div>
        <Button text={"Add User"} type={"submit"} />
      </form>
    </div>
  );
};
// Ojo Button must be of submit type otherwise It will not submit
export default InputUser;
