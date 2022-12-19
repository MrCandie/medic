import Head from "next/head";
import { Fragment } from "react";
import Date from "../components/home/date/Date";
import Header from "../components/home/header/Header";
import Navigation from "../components/home/navigation/navigation";
import Toggle from "../components/home/Toggle";
import Plus from "../components/ui/plus/Plus";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Date />
      <Toggle />
      <Plus />
      <Navigation />
    </Fragment>
  );
}
