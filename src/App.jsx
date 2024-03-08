import React, { useState } from "react";
import DataLoadingComponent from "./components/DataLoadingComponent ";
import DataTableComponent from "./components/DataTableComponent";
import UserCreationForm from "./components/UserCreationForm";

function App() {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const handleCreateUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  

  return (
    <div>
      <UserCreationForm onCreateUser={handleCreateUser} />
      <DataLoadingComponent setUsers={setUsers} setHasMore={setHasMore} />
      <DataTableComponent users={users} />
    </div>
  );
}

export default App;
