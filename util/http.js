import axios from "axios";

export function storeExpenses(expenseData) {
  axios.post(
    "https://react-native-course-ad9c2-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
