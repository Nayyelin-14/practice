import React from "react";
import Intro from "./Intro";
import { toast } from "react-toastify";

import { useLoaderData } from "react-router-dom";
import Home from "./Home";
import {
  createNewBudget,
  createNewExpense,
  fetchlocal,
} from "../functions/helpers";
const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  console.log(budgets);
  return (
    <div className="w-full block">
      {userName ? (
        <Home userName={userName} budgets={budgets} expenses={expenses} />
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;

export const dashboardAction = async ({ request }) => {
  const data = await request.formData();

  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome , ${values.userName}`);
    } catch (error) {
      throw new Error("Something went wrong when creating your account!");
    }
  }
  if (_action === "newBudget") {
    try {
      createNewBudget({
        budget_name: values.newBudget,
        budget_amount: values.newBudgetAmount,
      });
      return toast.success("New budget created.");
    } catch (error) {
      throw new Error("There was a problem creating new budget");
    }
  }
  if (_action === "newExpense") {
    try {
      createNewExpense({
        expense_name: values.NEWExpense,
        expense_amount: values.expense_amount,
        budget_id: values.budget_id,
      });

      return toast.success(`${values.NEWExpense} expense created successfully`);
    } catch (error) {
      throw new Error("There was a problem creating new expenese");
    }
  }
};

export const dashboardLoader = () => {
  const userName = fetchlocal("userName");
  const budgets = fetchlocal("budgets");
  const expenses = fetchlocal("expenses");
  return { userName, budgets, expenses };
};
