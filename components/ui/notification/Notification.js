import React, { Fragment } from "react";
import classes from "./notification.module.css";

export default function Notification({ title, text, type, modal }) {
  return (
    <Fragment>
      <div onClick={() => modal(false)} className="overlay"></div>
      <section className={classes.section}>
        <h1>{title}</h1>
        <p className={type === "success" ? classes.success : classes.error}>
          {text}
        </p>
        <button onClick={() => modal(false)}>Ok!</button>
      </section>
    </Fragment>
  );
}
