import React, { Fragment } from "react";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Navigation from "../../components/home/navigation/navigation";
import Appointment from "../../components/appointment/Appointment";
import Push from "../../components/ui/plus/Plus";

export default function Appointments() {
  return (
    <Fragment>
      <MedicHeader path="/" title="Doctor's appointments" />
      <Appointment />
      <Push />
      <Navigation />
    </Fragment>
  );
}
