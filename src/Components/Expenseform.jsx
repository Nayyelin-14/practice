import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const Expenseform = (props) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div>
      <div className="border-dashed border-2 rounded-xl border-black p-5 mt-10 w-full ">
        <h2 className="font-bold  text-2xl mb-4">Add Expense</h2>
        <fetcher.Form ref={formRef} method="post">
          <input
            type="text"
            hidden
            readOnly
            name="_action"
            value="newExpense"
          />
          <div>
            <label htmlFor="newExpense" className="block text-lg  font-medium">
              Expense Name
            </label>
            <input
              type="text"
              name="NEWExpense"
              id="newExpense"
              placeholder="eg . books"
              autoFocus
              ref={focusRef}
              className="border-2 border-gray-500 w-full px-3 py-2 rounded-lg mt-3 placeholder:text-cus-green text-lg focus:outline-none focus:border-cus-green"
            />
          </div>
          <div>
            <label
              htmlFor="newExpense"
              className="block mt-2 font-medium text-lg"
            >
              Amount{" "}
            </label>
            <input
              type="text"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="eg . 100$"
              autoFocus
              required
              inputMode="decimal"
              ref={focusRef}
              className="border-2 border-gray-500 w-full px-3 py-2 rounded-lg mt-3 placeholder:text-cus-green text-lg focus:outline-none focus:border-cus-green"
            />
          </div>
          {props.budgets.length > 1 && (
            <div>
              <label
                htmlFor="budgetCategory"
                className="block text-xl font-medium mt-3"
              >
                Budget Category
              </label>
              <select
                name="budgetCategory"
                id="budgetCategory"
                required
                className="border-2 border-gray-600 w-1/3 px-3 py-2 rounded-lg cursor-pointer placeholder:text-gray-500 mt-1 text-lg focus:outline-none"
              >
                {props.budgets
                  .sort((a, b) => a.created_at - b.created_at) // Sorting by date,  Users often prefer to see items in the order they were created, as it helps them find the most recent or oldest entries more easily.
                  .map((budget) => {
                    return (
                      <option value={budget.id} key={budget.id}>
                        {budget.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
          <button
            type="submit"
            className="mt-4 border-2 border-black p-2 flex items-center bg-black  text-white font-medium rounded-lg text-lg cursor-pointer hover:bg-white hover:text-black"
          >
            <span>Add Expense</span>
            <SquaresPlusIcon width={30} className="ml-1 md:ml-2" />
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default Expenseform;
