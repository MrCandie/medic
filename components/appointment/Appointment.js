import React, { Fragment, useContext, useEffect, useState } from "react";
import Search from "./Search";
import Link from "next/link";
import AppointmentList from "./AppointmentList";
import classes from "./appointment.module.css";
import { getAppointment } from "../../lib/http";
import Spinner from "../ui/spinner/spinner";
import { IoMdAdd } from "react-icons/io";
import { AuthContext } from "../../lib/AuthContext";

export default function Appointment() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const medications = await getAppointment();
        setData(medications);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const userData = data.filter((item) => item.key === auth.UID);

  return (
    <Fragment>
      <Search data={data} setData={setData} />
      {userData.length > 0 ? (
        <ul className={classes.list}>
          {userData.map((item) => (
            <AppointmentList list={item} />
          ))}
        </ul>
      ) : (
        <div className="center">
          <Link href="/appointment/add-appointment">
            <IoMdAdd />
            Add new appointment
          </Link>
        </div>
      )}
      {isLoading && <Spinner />}
    </Fragment>
  );
}
