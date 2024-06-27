import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
// import Card from "../Components/Card";
const Budget = () => {
  return (
    <div>
      <div className="mt-4 xl:flex items-start xl:space-x-4 ">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl xl:text-4xl font-bold my-4">
            <span className="text-cus-green"></span>
            Overview
          </h4>
          <Link
            to={"/"}
            className="text-white bg-cus-green font-medium px-3 py-2 flex items-center rounded-lg xl:hidden"
          >
            <HomeIcon width={26} className="inline-block" />
            <span>Go back</span>
          </Link>
        </div>
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Budget;

// export const budgetLoader = ({ params }) => {
//   const budget = budgetOfExpense({
//     key: "id",
//     type: "budgets",
//     value: params.id,
//   })[0];

//   if (!budget) {
//     throw new Error("No budget with this id");
//   }

//   const expenses = budgetOfExpense({
//     key: "budget_id",
//     type: "expenses",
//     value: params.id,
//   });
//   return { budget, expenses };
// };
