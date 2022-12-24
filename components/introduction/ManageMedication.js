import React from "react";
import classes from "./introduction.module.css";
import { ImFilesEmpty } from "react-icons/im";
import { useRouter } from "next/router";
import Progress from "./Progress";

export default function ManageMedication() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="drug" src="/images/manage.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>Manage your medication intake</h1>
        <p>
          Manage your medication and be sure of whick medication you take and
          when
        </p>
      </div>
      <Progress type1={true} type2={true} />
      <div className={classes.action}>
        <button onClick={() => router.replace("/")} className={classes.next}>
          Get Started
        </button>
      </div>
    </section>
  );
}
