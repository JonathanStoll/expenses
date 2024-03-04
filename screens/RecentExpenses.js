import { Text } from "react-native";
import ExpenesesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext)
    const recentExpenses = expensesCtx.expenses.filter(
        (expense)=>{
            const today = new Date()
            const date7daysAgo = getDateMinusDays(today, 7)
            return expense.date > date7daysAgo
        }
    )
    return<ExpenesesOutput expenses={recentExpenses} expensesPeriod={'Last 7 days'} />
}