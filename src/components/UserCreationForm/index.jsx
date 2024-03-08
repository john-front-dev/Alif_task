import React, { useState } from "react";
import { createUser } from "../../api/api";

const UserCreationForm = ({ onCreateUser }) => {
  const [newUserName, setNewUserName] = useState(""); // Состояние для имени нового пользователя
  const [newUserEmail, setNewUserEmail] = useState(""); // Состояние для email нового пользователя
  const [newUserStreet, setNewUserStreet] = useState(""); // Состояние для улицы нового пользователя

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: newUserName,
      email: newUserEmail,
      address: {
        street: newUserStreet,
      },
    };

    try {
      await createUser(newUser); // Создание нового пользователя
      setNewUserName(""); // Очистка состояния имени
      setNewUserEmail(""); // Очистка состояния email
      setNewUserStreet(""); // Очистка состояния улицы
      onCreateUser(newUser); // Вызов колбэка для обновления списка пользователей
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error); // Обработка ошибок
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Улица:</label>
        <input
          type="text"
          value={newUserStreet}
          onChange={(e) => setNewUserStreet(e.target.value)}
        />
      </div>
      <button type="submit">Создать</button>
    </form>
  );
};

export default UserCreationForm;
