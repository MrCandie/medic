import React, { Fragment, useContext, useEffect, useState } from "react";
import MedicHeader from "../../components/ui/MedicHeader/MedicHeader";
import Navigation from "../../components/home/navigation/navigation";
import Profile from "../../components/profile/Profile";
import { AuthContext } from "../../lib/AuthContext";

import Logins from "../account/login";
import { getUserData, login } from "../../lib/auth";
import Spinner from "../../components/ui/spinner/spinner";

export default function Profiles() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState("");
  const [idToken, setIdToken] = useState("");
  const [loading, setLoading] = useState(false);
  // const token = auth.token;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIdToken(token);
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getUserData(idToken);
        console.log(response);
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return;
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    }
  }, [data]);

  return (
    <Fragment>
      {auth.isLoggedIn ? (
        <Fragment>
          <MedicHeader title="profile" path="/" />
          <Profile data={data} />
          <Navigation />
          {loading && <Spinner />}
        </Fragment>
      ) : (
        <Logins />
      )}
    </Fragment>
  );
}
