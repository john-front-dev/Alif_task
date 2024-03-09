import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import DataLoadingComponent from "./components/DataLoadingComponent ";
import DataTableComponent from "./components/DataTableComponent";
import Modal from "./components/Modal/Modal";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  website: string;
}

function App({}) {
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const handleCreateUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Box mt={2} mb={2} display="flex" justifyContent="end">
        <Button variant="contained" onClick={handleOpenModal}>
          Создать пользователя
        </Button>
      </Box>
      <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        handleCreateUser={handleCreateUser}
      />
      <DataLoadingComponent setUsers={setUsers} setHasMore={setHasMore} />
      <div
        style={{
          border: "2px solid #E0E0E0",
          borderRadius: "8px",
        }}
      >
        <DataTableComponent users={users} />
      </div>
    </>
  );
}

export default App;
