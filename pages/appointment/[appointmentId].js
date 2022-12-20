import { useRouter } from "next/router";
import React, { Fragment } from "react";
import AppointmentDetail from "../../components/appointment/AppointmentDetail";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";

export default function AppointmentDetails() {
  const router = useRouter();

  const id = router.query.appointmentId;
  return (
    <Fragment>
      <MedicHeader title="Appointment details" path="appointment" />
      <AppointmentDetail id={id} />
    </Fragment>
  );
}
