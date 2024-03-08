import React, { useState } from "react";
import { createUser } from "../../api/api";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Snackbar,
  DialogActions,
} from "@mui/material";
import { Alert } from "@mui/material";

const UserCreationForm = ({ onCreateUser, handleCloseModal }) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserStreet, setNewUserStreet] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");
  const [newUserUsername, setNewUserUsername] = useState("");
  const [newUserWebsite, setNewUserWebsite] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [phoneError, setPhoneError] = useState(false); // Состояние ошибки для поля телефонного номера

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: newUserName,
      email: newUserEmail,
      address: {
        street: newUserStreet,
      },
      phone: newUserPhone,
      username: newUserUsername,
      website: newUserWebsite,
    };

    try {
      await createUser(newUser);
      setNewUserName("");
      setNewUserEmail("");
      setNewUserStreet("");
      setNewUserPhone("");
      setNewUserUsername("");
      setNewUserWebsite("");
      onCreateUser(newUser);
      setOpenToast(true);
      handleCloseModal(); // Закрываем модальное окно после успешного создания пользователя
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
    }
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setNewUserPhone(value);
    setPhoneError(!(/^\d+$/.test(value) && value.length === 12));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="end">
        <Grid item xs={12}>
          <Typography variant="h6">Создание пользователя</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Имя"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Улица"
            value={newUserStreet}
            onChange={(e) => setNewUserStreet(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Номер телефона"
            value={newUserPhone}
            onChange={handlePhoneChange}
            error={phoneError}
            helperText={phoneError ? "Неверный формат номера телефона" : ""}
            inputProps={{ type: "number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Ник"
            value={newUserUsername}
            onChange={(e) => setNewUserUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Сайт"
            value={newUserWebsite}
            onChange={(e) => setNewUserWebsite(e.target.value)}
          />
        </Grid>
        <DialogActions>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleCloseModal}
          >
            Закрыть
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Создать
          </Button>
        </DialogActions>
      </Grid>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          Пользователь успешно создан!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default UserCreationForm;
