import React, { Fragment } from "react";
import MedicationList from "./MedicationList";
import Search from "./Search";
import classes from "./medication.module.css";
import { drugData } from "../../data/store";

export default function Medication() {
  return (
    <Fragment>
      <Search />
      <ul className={classes.list}>
        {drugData.map((item) => (
          <MedicationList drug={item} />
        ))}
      </ul>
    </Fragment>
  );
}
