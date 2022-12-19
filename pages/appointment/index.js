import React, { Fragment, useContext } from "react";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Navigation from "../../components/home/navigation/navigation";
import Appointment from "../../components/appointment/Appointment";
import Push from "../../components/ui/plus/Plus";
import { AuthContext } from "../../lib/AuthContext";
import Login from "../account/login";

export default function Appointments() {
  const auth = useContext(AuthContext);
  const isLoggedIn = auth.isLoggedIn;
  return (
    <Fragment>
      {isLoggedIn ? (
        <Fragment>
          <MedicHeader path="/" title="Doctor's appointments" />
          <Appointment />
          <Push />
          <Navigation />
        </Fragment>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}
