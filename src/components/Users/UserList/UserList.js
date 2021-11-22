import React from "react";
import User from "../User/User";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </>
  );
};

export default UserList;
