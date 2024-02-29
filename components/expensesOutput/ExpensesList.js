import { FlatList, Text } from "react-native";

function renderExpensesItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}
export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}
