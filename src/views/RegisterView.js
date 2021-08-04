import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    width: 320,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    fontSize: "medium",
    fontFamily: "fantasy",
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = (data) => {
    dispatch(authOperations.register(data));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        alert(`Field ${name} types are not processed`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Post
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit" size="large" variant="contained" color="primary">
          Registration
        </Button>
      </form>
    </div>
  );
}
