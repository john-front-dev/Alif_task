import React, { useState } from "react";
import DataLoadingComponent from "./components/DataLoadingComponent ";
import DataTableComponent from "./components/DataTableComponent";
import { createUser } from "./api/api";
import Modal from "./components/Modal/Modal";
import UserCreationForm from "./components/UserCreationForm";

function App() {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateUser = async () => {
    try {
      const newUser = {
        name: newUserName,
        email: newUserEmail,
        address: {
          street: newUserStreet,
        },
      };
      const createdUser = await createUser(newUser);
      setUsers((prevUsers) => [...prevUsers, createdUser]);
      setNewUserName("");
      setNewUserEmail("");
      setNewUserStreet("");
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Создать пользователя</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserCreationForm onCreateUser={handleCreateUser} />
      </Modal>
      <DataLoadingComponent setUsers={setUsers} setHasMore={setHasMore} />
      <DataTableComponent users={users} />
    </div>
  );
}

export default App;
