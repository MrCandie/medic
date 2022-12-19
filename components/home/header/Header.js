import React from "react";
import classes from "./header.module.css";
import { AiOutlineBell } from "react-icons/ai";
import Spinner from "../../ui/spinner/spinner";

export default function Header({ user }) {
  if (!user) {
    return <Spinner />;
  }
  return (
    <header className={classes.header}>
      <h1>Welcome back, {user.users[0].displayName}</h1>
      <span>
        <AiOutlineBell />
      </span>
    </header>
  );
}
