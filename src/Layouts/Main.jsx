import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchlocal } from "../functions/helpers";

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="h-screen relative">
      <Navbar userName={userName} />
      <main className="px-8 md:px-40"></main>
      <Outlet />
    </div>
  );
};

export default Main;

export const mainLoader = () => {
  const userName = fetchlocal("userName");
  return { userName };
};
