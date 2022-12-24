import React from "react";
import { useRouter } from "next/router";
import classes from "./introduction.module.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Progress from "./Progress";

export default function ViewAppointments({ screen }) {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="drug" src="/images/doctor.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>View doctor's instruction and personal note</h1>
        <p>
          Add your doctor's instruction and personal note and view it before you
          take your medication
        </p>
      </div>
      <Progress type1={true} />
      <div className={classes.action}>
        <button onClick={() => router.replace("/")} className={classes.skip}>
          skip
        </button>
        <button onClick={() => screen(3)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
