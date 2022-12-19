import React, { Fragment, useContext } from "react";
import Medication from "../../components/medication/Medication";
import Navigation from "../../components/home/navigation/navigation";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Plus from "../../components/ui/plus/Plus";
import { AuthContext } from "../../lib/AuthContext";
import Login from "../account/login";

export default function Index() {
  const auth = useContext(AuthContext);
  return (
    <Fragment>
      {auth.isLoggedIn ? (
        <Fragment>
          <MedicHeader path="/" title="Medication" />
          <Medication />
          <Navigation />
          <Plus />
        </Fragment>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}
