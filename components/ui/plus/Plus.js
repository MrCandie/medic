import React, { Fragment, useState } from "react";
import { GrAdd } from "react-icons/gr";
import Option from "./option";
import classes from "./plus.module.css";

export default function Plus() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <span
        onClick={() => setShowModal((prev) => !prev)}
        className={classes.add}
      >
        <GrAdd />
      </span>
      {showModal && <Option setShowModal={setShowModal} />}
    </Fragment>
  );
}
