import React from "react";
import classes from "./medications.module.css";

export default function Medication() {
  return (
    <div className={classes.section}>
      <div className={classes.medic}>
        <h1>8 am</h1>
        <div className={classes.drug}>
          <div className={classes.image}>
            <img alt="drug" src="/images/drug1.jpg" />
          </div>
          <div className={classes.content}>
            <h1>Fesolate blood tonic (400mg)</h1>
            <p>2 tablets</p>
            <button>View Instructions</button>
          </div>
          <div className={classes.input}>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <div className={classes.medic}>
        <h1>10 am</h1>
        <div className={classes.drug}>
          <div className={classes.image}>
            <img alt="drug" src="/images/drug1.jpg" />
          </div>
          <div className={classes.content}>
            <h1>Fesolate blood tonic (400mg)</h1>
            <p>2 tablets</p>
            <button>View Instructions</button>
          </div>
          <div className={classes.input}>
            <input type="checkbox" />
          </div>
        </div>
        <div className={classes.drug}>
          <div className={classes.image}>
            <img alt="drug" src="/images/drug1.jpg" />
          </div>
          <div className={classes.content}>
            <h1>Fesolate blood tonic (400mg)</h1>
            <p>2 tablets</p>
            <button>View Instructions</button>
          </div>
          <div className={classes.input}>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
