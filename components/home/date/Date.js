import React from "react";
import classes from "./date.module.css";

export default function Date() {
  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <p>Mon</p>
        <h1>07</h1>
      </div>
      <div className={classes.date}>
        <p>Tue</p>
        <h1>08</h1>
      </div>
      <div className={classes.date}>
        <p>Wed</p>
        <h1>09</h1>
      </div>
      <div className={classes.date}>
        <p>Thur</p>
        <h1>10</h1>
      </div>
    </div>
  );
}
