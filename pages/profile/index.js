import React, { Fragment } from "react";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Navigation from "../../components/home/navigation/navigation";
import Profile from "../../components/profile/Profile";

export default function Profiles() {
  return (
    <Fragment>
      <MedicHeader title="profile" path="/" />
      <Profile />
      <Navigation />
    </Fragment>
  );
}
