import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  text: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: "small",
    fontFamily: "fantasy",
    color: "#14213d",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: "medium",
    textTransform: "uppercase",
    fontFamily: "fantasy",
    color: "#14213d",
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.text}>Welcome, </span>
      <span style={styles.name}>{name}</span>
      <Button variant="contained" onClick={onLogOut} color="primary">
        Logout
      </Button>
    </div>
  );
}
