import React, { Fragment, useContext, useEffect, useState } from "react";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Navigation from "../../components/home/navigation/navigation";
import Profile from "../../components/profile/Profile";
import { AuthContext } from "../../lib/AuthContext";

import Logins from "../account/login";
import { getUserData, login } from "../../lib/auth";

export default function Profiles() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState("");
  const token = auth.token;

  useEffect(() => {
    async function fetchData() {
      const response = await getUserData(token);
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      {auth.isLoggedIn ? (
        <Fragment>
          <MedicHeader title="profile" path="/" />
          <Profile data={data} />
          <Navigation />
        </Fragment>
      ) : (
        <Logins />
      )}
    </Fragment>
  );
}
