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

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = ({ email, password }) => {
    dispatch(authOperations.logIn({ email, password }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        alert(`Field ${name} types are not processed `);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
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
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
