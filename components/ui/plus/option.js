import React from "react";
import classes from "./plus.module.css";
import { GrAdd } from "react-icons/gr";

export default function Option({ setShowModal }) {
  return (
    <section>
      <div onClick={() => setShowModal(false)} className="overlay"></div>
      <div className={classes.container}>
        <div className={classes.content}>
          <span>
            <GrAdd />
            medication
          </span>
        </div>
        <div className={classes.content}>
          <span>
            <GrAdd />
            appointment
          </span>
        </div>
      </div>
    </section>
  );
}
