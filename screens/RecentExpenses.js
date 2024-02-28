import { Text } from "react-native";
import ExpenesesOutput from "../components/expensesOutput/ExpensesOutput";

export default function RecentExpenses(){
    return<ExpenesesOutput expensesPeriod={'Last 7 days'} />
}