import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav className="px-8 md:px-40 py-4 flex items-center justify-between w-full bg-white">
      <Link to={"/"} className="flex items-center">
        <BanknotesIcon width={40} className="inline-block text-cus-green" />
        <span className="text-3xl text-cus-green font-semibold">UR BUDGET</span>
      </Link>
      <div>
        {props.userName ? (
          <div>
            <Form
              method="post"
              action="/logout"
              onSubmit={(e) => {
                if (!window.confirm("Are u sure to logout? ")) {
                  e.preventDefault();
                }
              }}
            >
              <button type="submit" className="destroy--btn">
                <span className="font-semibold text-base hidden md:block">
                  Logout
                </span>
                <TrashIcon width={20} className="inline-block md:ml-1" />
              </button>
            </Form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
