import React from "react";
import classes from "./introduction.module.css";
import { GrAdd } from "react-icons/gr";

export default function ViewAppointments({ screen }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span>
          <GrAdd />
        </span>
      </div>
      <div className={classes.content}>
        <h1>View doctor's instruction and personal note</h1>
        <p>
          Add your doctor's instruction and personal note and view it before you
          take your medication
        </p>
      </div>
      <div className={classes.action}>
        <button className={classes.skip}>skip</button>
        <button onClick={() => screen(3)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
