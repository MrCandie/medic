import React from "react";
import classes from "./appointment.module.css";
import { GoLocation } from "react-icons/go";

export default function AppointmentList({ list }) {
  if (!list) {
    return <Spinner />;
  }
  return (
    <li key={list.id}>
      <h1>{list.name}</h1>
      <p>{list.diagnosis}</p>
      <div className={classes.location}>
        <address>
          <GoLocation />
          {list.address}
        </address>
      </div>
      <div className={classes.time}>
        <time>{list.time}</time>
        <p>{list.date}</p>
      </div>
    </li>
  );
}
