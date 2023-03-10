import React from "react";
import { useRouter } from "next/router";
import classes from "./introduction.module.css";
import { GrAdd } from "react-icons/gr";
import Progress from "./Progress";

export default function AddMedication({ screen }) {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="drug" src="/images/add.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>Add your medication and never forget to take them</h1>
        <p>
          Add your medication and get notified to use them!. Medication
          management made easy
        </p>
      </div>
      <Progress />
      <div className={classes.action}>
        <button onClick={() => router.replace("/")} className={classes.skip}>
          skip
        </button>
        <button onClick={() => screen(2)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
