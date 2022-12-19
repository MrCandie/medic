import React from "react";
import classes from "./medicheader.module.css";
import { AiOutlineBell } from "react-icons/ai";

export default function MedicHeader({ title }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <span>
        <AiOutlineBell />
      </span>
    </header>
  );
}
