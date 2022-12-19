import React from "react";
import classes from "./introduction.module.css";
import { GrAdd } from "react-icons/gr";

export default function AddMedication({ screen }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span>
          <GrAdd />
        </span>
      </div>
      <div className={classes.content}>
        <h1>Add your medication and never forget to take them</h1>
        <p>
          Add your medication and get notified to use them!. Medication
          management made easy
        </p>
      </div>
      <div className={classes.action}>
        <button className={classes.skip}>skip</button>
        <button onClick={() => screen(2)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
