import React from "react";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

const Tablecontainer = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-3">Recent Expenses</h1>

      <div className="relative overflow-x-auto">
        <Table expenses={props.expenses} limit={3} />
      </div>
      <div hidden={props.expenses.length < 3} className="text-right mt-6">
        <Link>View all expense</Link>
      </div>
    </div>
  );
};

export default Tablecontainer;
