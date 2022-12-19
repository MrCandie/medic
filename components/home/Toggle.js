import React, { Fragment, useEffect, useState } from "react";
import { getMedication } from "../../lib/http";
import Appointment from "./appointment/Appointment";
import Medication from "./medication/Medication";
import classes from "./medication/medications.module.css";

export default function Toggle({ data, appointmentData }) {
  const [screen, setScreen] = useState("medication");
  let displayScreen;
  if (screen === "medication") {
    displayScreen = <Medication data={data} />;
  } else if (screen === "appointment") {
    displayScreen = <Appointment data={appointmentData} />;
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
