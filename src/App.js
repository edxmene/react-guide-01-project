import React, { useState } from "react";

import InputUser from "./components/Users/InputUser/InputUser";
import UserList from "./components/Users/UserList/UserList";

const initialUsers = [
  { id: 1, username: "Dario", age: 20 },
  { id: 2, username: "Nelly", age: 22 },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <main>
      <div className="card mt-5 container">
        <div className="card-body">
          <div className="container">
            <InputUser setUsers={setUsers} users={users} />
          </div>
        </div>
      </div>
      <UserList users={users} />
    </main>
  );
}

export default App;
