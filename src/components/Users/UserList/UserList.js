import React from "react";
import User from "../User/User";

const UserList = ({ users, deleteUser }) => {
  return (
    <>
      {users.map((user) => {
        return <User user={user} key={user.id} deleteUser={deleteUser} />;
      })}
    </>
  );
};

export default UserList;
