import React, { Fragment, useEffect, useState } from "react";
import MedicationList from "./MedicationList";
import Search from "./Search";
import classes from "./medication.module.css";
import Spinner from "../../components/ui/spinner/spinner";
import { getMedication } from "../../lib/http";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function Medication() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const medications = await getMedication();
        setData(medications);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <Search data={data} setData={setData} />
      {data.length > 0 ? (
        <ul className={classes.list}>
          {data.map((item) => (
            <MedicationList drug={item} />
          ))}
        </ul>
      ) : (
        <div className="center">
          <Link href="/medication/add-medication">
            <IoMdAdd />
            Add new medication
          </Link>
        </div>
      )}
      {isLoading && <Spinner />}
    </Fragment>
  );
}
