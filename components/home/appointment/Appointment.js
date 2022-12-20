import React from "react";
import classes from "./appointments.module.css";
import { GoLocation } from "react-icons/go";
// import Pulse from "react-reveal/Pulse";

export default function Appointment({ data }) {
  return (
    <div className={classes.section}>
      {data.map((item) => (
        <div key={item.id} className={classes.container}>
          <h1>{item.time}</h1>
          <div className={classes.appointment}>
            <div className={classes.content}>
              <h1>{item.name}</h1>
              <p>sore throat and difficulty breathing</p>
              <div className={classes.location}>
                <span>
                  <GoLocation />
                </span>
                <p>{item.address}</p>
              </div>
              <button>View Details</button>
            </div>
            <div className={classes.input}>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
