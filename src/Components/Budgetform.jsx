// react imports
import { useEffect, useRef } from "react";

// rrd imports
// eslint-disable-next-line
import { Form, useFetcher } from "react-router-dom";

// icons import
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Budgetform = () => {
  //         useFetcher is a hook provided by React Router (especially in the context of React Router v6 or Remix). It allows you to manage and interact with forms and other data-fetching needs in a declarative way. The fetcher object returned by useFetcher provides a convenient way to interact with form submissions, and it includes state management for handling the submission process.

  // Key Points about useFetcher:
  // Fetching Data: You can use fetcher to fetch data from the server.
  // Form Submission: It can handle form submissions without needing to navigate away from the current page.
  // State Management: fetcher provides information about the current state of the form submission, such as whether it's submitting, loading, or idle.

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // Check if formRef and focusRef are correctly assigned before calling methods
      if (formRef.current && focusRef.current) {
        formRef.current.reset();
        focusRef.current.focus();
      } else {
        console.error("formRef or focusRef is not assigned correctly.");
      }
    }
  }, [isSubmitting]);

  //   /If the form is not submitting (!isSubmitting), it resets the form and focuses on the input element.
  return (
    <div className="w-full">
      <div className="border-2 border-dashed rounde-xl border-black  p-3 md:p-6 mt-10 w-full h-fit ">
        <h2 className="text-xl font-bold md:text-2xl mb-3">Create budget</h2>
        <fetcher.Form method="post" ref={formRef}>
          {/* Clarity and Maintainability: Using a hidden input for _action makes the form's purpose explicit, which is helpful for debugging and maintaining the code.
Flexibility: It allows you to handle multiple types of form submissions with a single endpoint or handler.
Simplicity: It simplifies the server-side or client-side logic needed to distinguish between different forms or actions. */}
          <input type="text" hidden name="_action" value="newBudget" readOnly />
          <div className="mb-3">
            <label htmlFor="newBudget" className="block text-lg font-medium">
              Budget name
            </label>
            <input
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
              type="text"
              name="newBudget"
              id="newBudget"
              placeholder="Eg , Personal"
              autoFocus
              ref={focusRef}
            />
          </div>
          <div>
            <label
              htmlFor="newBudgetAmount"
              className="block text-xl font-medium"
            >
              Amount
            </label>
            <input
              type="text"
              name="newBudgetAmount"
              placeholder="Eg , 350$"
              id="newBudgetAmount"
              inputMode="decimal"
              required
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center bg-black text-white font-semibold  px-3 py-3 mt-3 rounded-lg justify-center text-lg"
          >
            <span>Create Budget</span>
            <CurrencyDollarIcon width={30} className="ml-1 md:ml-2" />
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default Budgetform;
