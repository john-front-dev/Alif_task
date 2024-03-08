import { useState } from "react";

const UserCreationForm = ({ onCreateUser }) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserStreet, setNewUserStreet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: newUserName,
      email: newUserEmail,
      address: {
        street: newUserStreet,
      },
    };
    onCreateUser(newUser);
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
