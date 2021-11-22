import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Modal from "../../Modal/Modal";
import Card from "../../UI/Card";

const InputUser = ({ addUser }) => {
  const [userInput, setUserInput] = useState("");
  const [userAge, setUserAge] = useState(0);
  // const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "" || userAge.trim() === "") {
      // setIsInvalid(true);
      setError({
        title: "Invalid input",
        message: "Username and Age fields must be entered",
      });
      return;
    }
    if (userAge < 0) {
      // setIsInvalid(true);
      setError({
        title: "Invalid age",
        message: "Age must be a positive number greater than 1",
      });
      setUserAge("");
      return;
    }
    const newUsers = {
      id: Date.now(),
      username: userInput,
      age: +userAge, //+ converts string to a number
    };
    addUser(newUsers);
    setUserInput("");
    setUserAge("");
  };
  return (
    <>
      {error && (
        <Modal
          errorTitle={error.title}
          errorMessage={error.message}
          setError={setError}
        />
      )}
      <Card>
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
          <Button text="Add User" type="submit" />
        </form>
      </Card>
    </>
  );
};
// Ojo Button must be of submit type otherwise It will not submit
export default InputUser;
