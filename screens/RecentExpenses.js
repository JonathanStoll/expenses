import ExpenesesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      setLoading(true);
      try {
        const expenses = await getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not get expenses!");
      }
      setLoading(false);
    }
    fetchExpenses();
  }, []);

  function errorHandeler() {
    setError(null);
  }

  if (error && !loading) {
    return <ErrorOverlay message={error} onConfirm={errorHandeler} />;
  }

  if (loading) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });
  return (
    <ExpenesesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
      fallBackText="No expenses register for the last 7 days"
    />
  );
}
