import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { deleteUserName } from "../functions/helpers";
// import logout from "../svgs/logout.svg";
const Logout = () => {
  return (
    <section className="flex items-center justify-center text-center h-screen gap-2 flex-col">
      <div>
        {/* <img src={logout} alt="logout" width={500} /> */}
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-cus-green ">
            Ur account has logged out!!
          </h1>
          <Link to={"/"}>
            <p className="text-lg font-semibold text-gray-500 underline">
              Create your new tracker now !
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Logout;

export const logoutAction = () => {
  deleteUserName({
    key: "userName",
  });
  deleteUserName({
    key: "budgets",
  });
  deleteUserName({
    key: "expenses",
  });
  toast.success("Successfully logout!!");

  return redirect("/logout");
};
