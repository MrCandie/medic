import React, { Fragment, useEffect, useState } from "react";
import { getMedication } from "../../lib/http";
import Appointment from "./appointment/Appointment";
import Medication from "./medication/Medication";
import classes from "./medication/medications.module.css";

export default function Toggle({ data, appointmentData }) {
  const [screen, setScreen] = useState("medication");
  const [active, setActive] = useState("medication");
  let displayScreen;
  if (screen === "medication") {
    displayScreen = <Medication active={active} data={data} />;
  } else if (screen === "appointment") {
    displayScreen = <Appointment active={active} data={appointmentData} />;
  }
  return (
    <Fragment>
      <div className={classes.container}>
        <button
          className={active === "medication" ? classes.active : classes.button}
          onClick={() => {
            setScreen("medication");
            setActive("medication");
          }}
        >
          Medications
        </button>
        <button
          className={active === "appointment" ? classes.active : classes.button}
          onClick={() => {
            setScreen("appointment");
            setActive("appointment");
          }}
        >
          Appointments
        </button>
      </div>
      {displayScreen}
    </Fragment>
  );
}
