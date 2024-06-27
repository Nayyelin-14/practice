import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main, { mainLoader } from "./Layouts/Main";
import Dashboard, { dashboardAction, dashboardLoader } from "./Pages/Dashboard";
import Logout, { logoutAction } from "./Pages/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Budget from "./Pages/Budget";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      children: [
        {
          index: true,
          element: <Dashboard />,
          action: dashboardAction,
          loader: dashboardLoader,
        },
        {
          path: "/logout",
          element: <Logout />,
          action: logoutAction,
        },
        {
          path: "budget/:id",
          element: <Budget />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
