import { createContext, useReducer, useState } from "react";

 const DUMMY_EXPENSES =[
    {
        id: 'e1',
        description: 'a pair of shues',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'a book',
        amount: 60.99,
        date: new Date('2022-11-19')
    },
    {
        id: 'e3',
        description: 'food',
        amount: 19.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e4',
        description: 'some comics',
        amount: 9.99,
        date: new Date('2023-01-19')
    },
    {
        id: 'e5',
        description: 'a pair of mangas',
        amount: 5.99,
        date: new Date('2023-12-19')
    }, {
        id: 'e6',
        description: 'a pair of shues',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'a book',
        amount: 60.99,
        date: new Date('2022-11-19')
    },
    {
        id: 'e8',
        description: 'food',
        amount: 19.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e9',
        description: 'some comics',
        amount: 9.99,
        date: new Date('2023-01-19')
    },
    {
        id: 'e10',
        description: 'a pair of mangas',
        amount: 5.99,
        date: new Date('2023-12-19')
    }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});
function expensesRedcer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString + Math.random.toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpensesIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpensesIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpensesIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContexProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesRedcer, DUMMY_EXPENSES);
  function addExpenses(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }
  function deleteExpenses(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpenses(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  const value = {
    expenses: expensesState,
    addExpenses: addExpenses,
    deleteExpenses: deleteExpenses,
    updateExpenses: updateExpenses
  }
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContexProvider;
