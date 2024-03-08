import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import UserCreationForm from "../UserCreationForm/index";

const Modal = ({ open, handleCloseModal, handleCreateUser }) => {
  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogContent>
        <UserCreationForm
          onCreateUser={handleCreateUser}
          handleCloseModal={handleCloseModal}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
