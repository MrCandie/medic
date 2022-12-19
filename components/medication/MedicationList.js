import React, { Fragment } from "react";
import classes from "./medication.module.css";
import { useRouter } from "next/router";
import Spinner from "../ui/spinner/spinner";

export default function MedicationList({ drug }) {
  if (!drug) {
    return <Spinner />;
  }
  const router = useRouter();
  return (
    <Fragment>
      <li key={drug.id} onClick={() => router.push(`/medication/${drug.id}`)}>
        <div className={classes.image}>
          <img alt="drug" src={drug.image} />
        </div>
        <h1>{drug.name}</h1>
        <p>{drug.dose}</p>
      </li>
    </Fragment>
  );
}
