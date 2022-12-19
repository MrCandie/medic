import React, { Fragment } from "react";
import AppointmentForm from "../../components/appointment/AppointmentForm";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";

export default function AddAppointments() {
  return (
    <Fragment>
      <MedicHeader path="/appointment" title="Add appointment" />
      <AppointmentForm />
    </Fragment>
  );
}
