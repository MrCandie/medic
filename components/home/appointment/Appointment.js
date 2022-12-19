import React from "react";
import classes from "./appointments.module.css";
import { GoLocation } from "react-icons/go";

export default function Appointment() {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1>11 am</h1>
        <div className={classes.appointment}>
          <div className={classes.content}>
            <h1>Dr Mary Johnson</h1>
            <p>sore throat and difficulty breathing</p>
            <div className={classes.location}>
              <span>
                <GoLocation />
              </span>
              <p>st johnson hospital, marvel road lagos</p>
            </div>
            <button>View Details</button>
          </div>
          <div className={classes.input}>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <h1>3 pm</h1>
        <div className={classes.appointment}>
          <div className={classes.content}>
            <h1>Dr john doe</h1>
            <p>sore throat and difficulty breathing</p>
            <div className={classes.location}>
              <span>
                <GoLocation />
              </span>
              <p>st johnson hospital, marvel road lagos</p>
            </div>
            <button>View Details</button>
          </div>
          <div className={classes.input}>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
