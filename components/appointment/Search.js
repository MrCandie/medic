import React, { useRef, useState } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import Spinner from "../ui/spinner/spinner";
import classes from "./appointment.module.css";

export default function Search({ data, setData }) {
  const searchRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  function searchHandler(e) {
    e.preventDefault();
    const enteredSearch = searchRef.current.value;
    setIsLoading(true);
    const searchItem = data.filter((item) =>
      item.name.includes(enteredSearch.trim().toLowerCase())
    );
    setIsLoading(false);
    setData(searchItem);
    searchRef.current.value = "";
  }
  return (
    <section className={classes.search}>
      <form onSubmit={searchHandler}>
        <input
          ref={searchRef}
          type="search"
          placeholder="Search for doctor's name"
        />
      </form>
      <span>
        <BsFillFilterSquareFill />
      </span>
      {isLoading && <Spinner />}
    </section>
  );
}
