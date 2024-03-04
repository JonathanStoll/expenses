import { createContext } from "react";

const ExpensesContext = createContext({
    expenses: [],
    addExpense: ()=> {},
    deleteExpense: ()=> {},
    updateExpense: ()=> {},
})