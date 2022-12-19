import React, { Fragment, useState } from "react";
import AddMedication from "../../components/introduction/AddMedication";
import ManageMedication from "../../components/introduction/ManageMedication";
import ViewAppointments from "../../components/introduction/ViewAppointment";

export default function Index() {
  const [screen, setScreen] = useState(1);
  let displayScreen;
  if (screen === 1) {
    displayScreen = <AddMedication screen={setScreen} />;
  } else if (screen === 2) {
    displayScreen = <ViewAppointments screen={setScreen} />;
  } else if (screen === 3) {
    displayScreen = <ManageMedication />;
  }
  return <Fragment>{displayScreen}</Fragment>;
}
