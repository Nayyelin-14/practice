export function fetchlocal(key) {
  return JSON.parse(localStorage.getItem(key));
} //get item from localstorage

//delete username
export const deleteUserName = ({ key }) => {
  return localStorage.removeItem(key);
};

//for creating new budget
export const createNewBudget = ({ budget_name, budget_amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: budget_name,
    amount: Number(budget_amount),
    created_at: new Date(),
  };

  const existedBudget = fetchlocal("budgets") ?? []; //shi yin budgets ko phk , mshi yin empty array

  localStorage.setItem(
    "budgets",
    JSON.stringify([...existedBudget, newBudget])
  );
};

//for new expenses
export const createNewExpense = ({
  expense_name,
  expense_amount,
  budget_id,
}) => {
  const newExpense = {
    id: crypto.randomUUID(),
    budget_id: budget_id,
    name: expense_name,
    amount: expense_amount,
    created_at: new Date(),
  };

  const existedExpenses = fetchlocal("expenses") ?? [];

  localStorage.setItem(
    "expenses",
    JSON.stringify([...existedExpenses, newExpense])
  );
};

//delete expense
export const deleteExpense = ({ key, expense_Id }) => {
  const existedItem = fetchlocal(key); //shi pee thr ko shr
  const newItems = existedItem.filter((Item) => {
    return Item.id !== expense_Id; //phyt mk id nk shi pee thr id
  });
  return localStorage.setItem(key, JSON.stringify(newItems));
};

//total usage budget
export const calcSpentByBudget = (budget_id) => {
  const expenses = fetchlocal("expenses") ?? [];
  const spentbudget = expenses.reduce((acc, expense) => {
    if (expense.budget_id !== budget_id) {
      return acc;
    } else {
      return (acc += expense.amount);
    }
  }, 0);
  return spentbudget;
};

export const formatCurrency = (amount) => {
  try {
    return amount.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
  } catch (error) {
    console.error("Error in formatCurrency:", error);
    return "Error formatting currency";
  }
};

export const formatPercent = (amount) => {
  try {
    if (typeof amount !== "number") {
      return ""; // Handle non-numeric input gracefully
    }

    return (amount * 100).toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 0,
    });
  } catch (error) {
    console.error("Error in formatPercent:", error);
    return "Error formatting percent";
  }
};

export const formatDate = (date) => {
  try {
    return new Date(date).toLocaleDateString();
  } catch (error) {
    console.error("Error in formatDate:", error);
    return "Error formatting date";
  }
};
export const budgetOfExpense = ({ key, value, type }) => {
  const data = fetchlocal(type) ?? [];
  return data.filter((item) => item[key] === value);
};
