import React, { Fragment } from "react";
import MedicationForm from "../../components/medication/MedicationForm";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";

export default function AddMedication() {
  return (
    <Fragment>
      <MedicHeader title="Add new medication" path="/medication" />
      <MedicationForm />
    </Fragment>
  );
}
