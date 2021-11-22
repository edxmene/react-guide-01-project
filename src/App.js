import React, { useState } from "react";

import InputUser from "./components/Users/InputUser/InputUser";
import UserList from "./components/Users/UserList/UserList";

const initialUsers = [
  { id: 1, username: "Dario", age: 20 },
  { id: 2, username: "Nelly", age: 22 },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (userInfo) => {
    setUsers((prevUsers) => {
      return [userInfo, ...prevUsers];
    });
  };

  const deleteUser = (idUser) => {
    const newUsers = users.filter((user) => user.id !== idUser);
    setUsers(newUsers);
  };

  return (
    <main>
      <InputUser setUsers={setUsers} users={users} addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </main>
  );
}

export default App;
