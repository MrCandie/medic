import React from "react";
import classes from "./header.module.css";
import { AiOutlineBell } from "react-icons/ai";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>Welcome back Candie</h1>
      <span>
        <AiOutlineBell />
      </span>
    </header>
  );
}
