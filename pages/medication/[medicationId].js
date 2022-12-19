import { useRouter } from "next/router";
import React, { Fragment } from "react";
import MedicationDetail from "../../components/medication/MedicationDetail";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";

export default function MedicDetail() {
  const router = useRouter();
  const id = router.query.medicationId;
  return (
    <Fragment>
      <MedicHeader title="Medication description" />
      <MedicationDetail id={id} />
    </Fragment>
  );
}
