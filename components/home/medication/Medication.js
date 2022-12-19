import React, { Fragment } from "react";
import classes from "./medications.module.css";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";

export default function Medication({ data }) {
  return (
    <Fragment>
      {data.map((item) => (
        <div className={classes.section}>
          <div className={classes.medic}>
            <h1>8 am</h1>
            <div className={classes.drug}>
              <div className={classes.image}>
                <img alt="drug" src={item.image} />
              </div>
              <div className={classes.content}>
                <h1>{item.name}</h1>
                <p>
                  {item.dose}
                  {item.value}
                </p>
                <button>View Instructions</button>
              </div>
              <div className={classes.input}>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
