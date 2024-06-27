import React from "react";
// import {
//   calcSpentByBudget,
//   formatCurrency,
//   formatPercent,
// } from "../helper/helper";
import { Link } from "react-router-dom";
import {
  calcSpentByBudget,
  formatCurrency,
  formatPercent,
} from "../functions/helpers";
const Displaycard = ({ budget }) => {
  const { id, name, amount } = budget;
  console.log(id);
  const spend = calcSpentByBudget(id);
  return (
    <div className=" text-black rounded-xl p-4 w-full mb-4 flex flex-col gap-3 bg-lime-500">
      <p className="text-xl xl:text-2xl font-bold">{name}</p>
      <p className="text-xs xl:text-sm font-semibold my-1 xl:my-0">
        {formatCurrency(amount)} Budgeted
      </p>

      <progress max={amount} value={spend}>
        {formatPercent(spend / amount)}
      </progress>
      <div className="flex items-center justify-between text-xs font-medium">
        <p>{formatCurrency(spend)} spent</p>
        <p>{formatCurrency(amount - spend)} remaining</p>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Link
            to={`budget/${budget.id}`}
            className="flex items-center font-medium px-2 py-1 bg-white text-cus-green mt-4 rounded-md"
          >
            <span className="mr-2">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Displaycard;
