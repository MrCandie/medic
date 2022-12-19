import React from "react";
import { useRouter } from "next/router";
import classes from "./medicheader.module.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

export default function MedicHeader({ title, path }) {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <span onClick={() => router.replace(`/${path}`)}>
        <BsArrowLeft />
      </span>
      <h1>{title}</h1>
      <span>
        <AiOutlineBell />
      </span>
    </header>
  );
}
