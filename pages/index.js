import Head from "next/head";
import { Fragment, useContext, useEffect, useState } from "react";
import Dates from "../components/home/date/Date";
import Header from "../components/home/header/Header";
import Navigation from "../components/home/navigation/navigation";
import Toggle from "../components/home/Toggle";
import Plus from "../components/ui/plus/Plus";
import { getAppointment, getMedication } from "../lib/http";
import Empty from "../components/home/Empty";
import Spinner from "../components/ui/spinner/spinner";
import { AuthContext } from "../lib/AuthContext";
import Logins from "./account/login";
import { getUserData } from "../lib/auth";

export default function Home() {
  const [data, setData] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");

  const auth = useContext(AuthContext);
  const isLoggedIn = auth.isLoggedIn;

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    async function fetchMedication() {
      try {
        setIsLoading(true);
        const medicData = await getMedication();
        const userData = medicData.filter((item) => item.key === uid);
        setData(userData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchMedication();
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    async function fetchAppointment() {
      try {
        setIsLoading(true);
        const medicData = await getAppointment();
        const userData = medicData.filter((item) => item.key === uid);
        setAppointmentData(userData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchAppointment();
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        const response = await getUserData(auth.token);
        setUser(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    getUser();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Medicfy</title>
        <meta
          name="description"
          content="Get notified about your appointment with your doctor or about your medication. with medicfy, you don't have to worry because we will keep tabs and always inform you when your medication or appoijtment is due"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoggedIn ? (
        <Fragment>
          <Header user={user} />
          {data.length > 0 || appointmentData.length > 0 ? (
            <Fragment>
              <Dates data={data} />
              <Toggle appointmentData={appointmentData} data={data} />
            </Fragment>
          ) : (
            <Empty title="medications" />
          )}
          <Plus />
          <Navigation />
        </Fragment>
      ) : (
        <Logins />
      )}
      {isLoading && <Spinner />}
    </Fragment>
  );
}
