import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import DataLoadingComponent from "./components/DataLoadingComponent ";
import DataTableComponent from "./components/DataTableComponent";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [open, setOpen] = useState(false);

  const handleCreateUser = (newUser) => {
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
          borderRadius: "12px",
        }}
      >
        <DataTableComponent users={users} />
      </div>
    </>
  );
}

export default App;
