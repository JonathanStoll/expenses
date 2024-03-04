import { useContext } from "react";
import ExpenesesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpenesesOutput expenses={expensesCtx.expenses} expensesPeriod={"TOTAL"} fallBackText='No Expenses Found!!' />
  );
}
