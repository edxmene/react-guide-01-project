import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

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
      <Modal />
      <div className="card mt-5 container">
        <div className="card-body">
          <div className="container">
            <InputUser setUsers={setUsers} users={users} addUser={addUser} />
          </div>
        </div>
      </div>
      <UserList users={users} deleteUser={deleteUser} />
    </main>
  );
}

export default App;
