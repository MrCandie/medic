import React from "react";
import { ImSpinner2 } from "react-icons/im";
import classes from "./spinner.module.css";

export default function Spinner() {
  return (
    <div className={classes.spinner}>
      <span>
        <ImSpinner2 />
      </span>
    </div>
  );
}
