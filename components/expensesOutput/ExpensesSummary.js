import { View, Text } from "react-native";

export default function ExpensesSummary({ expenses, piriodName }) {
  const expenesesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{piriodName}</Text>
      <Text>${expenesesSum.toFixed(2)}</Text>
    </View>
  );
}
