import React from "react";
import { useRouter } from "next/router";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";
import classes from "../home/medication/medications.module.css";

export default function Empty() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.contain}>
        <div className={classes.blank}>
          <span>
            <BsFilterLeft />
          </span>
        </div>
        <div className={classes.contents}>
          <h1>no medication added</h1>
          <p>
            you currently have no medication added, add your medication and
            doctor's appointment
          </p>
        </div>
        <div className={classes.actions}>
          <div
            onClick={() => router.replace("/medication/add-medication")}
            className={classes.action}
          >
            <span>
              <MdOutlineAdd />
            </span>
            <h1>add medications</h1>
          </div>
          <div
            onClick={() => router.replace("/appointment/add-appointment")}
            className={classes.action}
          >
            <span>
              <MdOutlineAdd />
            </span>
            <h1>add appointments</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
