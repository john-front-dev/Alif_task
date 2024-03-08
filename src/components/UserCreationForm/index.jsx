import React, { useState } from "react";
import { createUser } from "../../api/api";
import {
  Button,
  TextField,
  Grid,
  Typography,
  DialogActions,
} from "@mui/material";

const UserCreationForm = ({ onCreateUser, handleCloseModal }) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserStreet, setNewUserStreet] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");
  const [newUserUsername, setNewUserUsername] = useState("");
  const [newUserWebsite, setNewUserWebsite] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPhoneValid =
      /^\d+$/.test(newUserPhone) && newUserPhone.length === 12;
    setPhoneError(!isPhoneValid);

    if (!isPhoneValid) {
      return;
    }

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
      handleCloseModal();
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
    }
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
            error={phoneError}
            helperText={
              phoneError
                ? "Неверный формат номера телефона. Номер должен состоять из 12 цифр."
                : ""
            }
            onChange={(e) => setNewUserPhone(e.target.value)}
            sx={{ borderColor: phoneError ? "red" : null }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Ник"
            value={newUserUsername}
            onChange={(e) => setNewUserUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
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
    </form>
  );
};

export default UserCreationForm;
