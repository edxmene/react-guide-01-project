import React from "react";

const User = ({ user, deleteUser }) => {
  return (
    <>
      <div
        className="card mt-3 container item"
        onClick={() => deleteUser(user.id)}
      >
        <div className="card-body">
          <div className="container">
            <p className="form-control">
              {user.username} ({user.age} years old)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
