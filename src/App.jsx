import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DataLoadingComponent from "./components/DataLoadingComponent ";
import DataTableComponent from "./components/DataTableComponent";
import UserCreationForm from "./components/UserCreationForm";

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
    <div>
      <Button variant="contained" onClick={handleOpenModal}>
        Создать пользователя
      </Button>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogContent>
          <UserCreationForm
            onCreateUser={handleCreateUser}
            handleCloseModal={handleCloseModal}
          />
        </DialogContent>
      </Dialog>
      <DataLoadingComponent setUsers={setUsers} setHasMore={setHasMore} />
      <DataTableComponent users={users} />
    </div>
  );
}

export default App;
