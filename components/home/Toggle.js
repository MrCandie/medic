import React, { Fragment, useState } from "react";
import Appointment from "./appointment/Appointment";
import Medication from "./medication/Medication";
import classes from "./medication/medications.module.css";

export default function Toggle() {
  const [screen, setScreen] = useState("medication");
  let displayScreen;
  if (screen === "medication") {
    displayScreen = <Medication />;
  } else if (screen === "appointment") {
    displayScreen = <Appointment />;
  }
  return (
    <Fragment>
      <div className={classes.container}>
        <button onClick={() => setScreen("medication")}>Medications</button>
        <button onClick={() => setScreen("appointment")}>Appointments</button>
      </div>
      {displayScreen}
    </Fragment>
  );
}
