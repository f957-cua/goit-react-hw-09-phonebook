import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    fontSize: "medium",
    fontFamily: "fantasy",
    color: "#14213d",
  },
  activeLink: {
    color: "#fca311",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Cell contacts
        </NavLink>
      )}
    </nav>
  );
}
