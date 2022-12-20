import React from "react";
import classes from "./plus.module.css";
import { GrAdd } from "react-icons/gr";
import Link from "next//link";
// import Fade from "react-reveal/Fade";

export default function Option({ setShowModal }) {
  return (
    <section>
      <div onClick={() => setShowModal(false)} className="overlay"></div>
      <div className={classes.containers}>
        <Link href="/medication/add-medication" className={classes.content}>
          <span>
            <GrAdd />
            medication
          </span>
        </Link>
        <Link href="/appointment/add-appointment" className={classes.content}>
          <span>
            <GrAdd />
            appointment
          </span>
        </Link>
      </div>
    </section>
  );
}
