import React from "react";
import Budgetform from "../Components/Budgetform";
import Expenseform from "../Components/Expenseform";
import Tablecontainer from "../Layouts/Tablecontainer";
import Showcontainer from "../Layouts/Showcontainer";
const Home = (props) => {
  return (
    <div className="p-6">
      {props.budgets && props.budgets.length > 0 ? (
        <div className="xl:flex gap-8   xl:justify-center xl:start flex justify-center w-full xl:flex-row flex-col items:center">
          <div className="xl:w-2/3 w-2/3 mx-auto ">
            <Budgetform />
            <Expenseform budgets={props.budgets} />
          </div>
          <div className="mt-10 w-full block ">
            <Showcontainer budgets={props.budgets} />
            {props.expenses && props.expenses.length && (
              <Tablecontainer expenses={props.expenses} />
            )}
          </div>
        </div>
      ) : (
        <div className="xl:w-2/3  m-auto mt-8">
          <h1
            className="text-3xl md:text-6xl
                font-extrabold text-cus-green mb-6"
          >
            Welcome , <span>{props.userName}</span>
          </h1>
          <p className="text-gray-500 text-xl">
            Personal budgeting is the secret to financial freedom.
            <br className="hidden md:block" />
            Create a budget to get started!
          </p>
          <Budgetform />
        </div>
      )}
    </div>
  );
};

export default Home;
