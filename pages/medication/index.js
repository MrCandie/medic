import React, { Fragment } from "react";
import Medication from "../../components/medication/Medication";
import Navigation from "../../components/home/navigation/navigation";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Plus from "../../components/ui/plus/Plus";

export default function Index() {
  return (
    <Fragment>
      <MedicHeader path="/" title="Medication" />
      <Medication />
      <Navigation />
      <Plus />
    </Fragment>
  );
}
