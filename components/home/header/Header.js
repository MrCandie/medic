import React from "react";
import classes from "./header.module.css";
import { AiOutlineBell } from "react-icons/ai";

export default function Header({ user }) {
  return (
    <header className={classes.header}>
      <h1>Welcome back, {user ? user.users[0].displayName : ""}</h1>
      <span>
        <AiOutlineBell />
      </span>
    </header>
  );
}
