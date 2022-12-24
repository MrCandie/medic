import React from "react";
import classes from "./introduction.module.css";

export default function Progress({ type1, type2 }) {
  return (
    <div className={classes.progress}>
      <div className={classes.outer}>
        <div className={classes.inner}></div>
      </div>
      <div className={classes.outer}>
        {type1 && <div className={classes.inner}></div>}
      </div>
      <div className={classes.outer}>
        {type2 && <div className={classes.inner}></div>}
      </div>
    </div>
  );
}
