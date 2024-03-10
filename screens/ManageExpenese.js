import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constents/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpensForm from "../components/manageExpense/ExpenseForm";
import { deleteExpenses, storeExpenses, updateExpenses } from "../util/http";

export default function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedID = route.params?.expenseId;
  const isEditing = !!editedID;
  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedID
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const onDeleteHandeler = async () => {
    await deleteExpenses(editedID);
    expenseCtx.deleteExpenses(editedID);
    navigation.goBack();
  };

  const onCancelHandeler = () => {
    navigation.goBack();
  };
  const onConfirmHandeler = async (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpenses(editedID, expenseData);
      await updateExpenses(editedID, expenseData);
    } else {
      const id = await storeExpenses(expenseData);
      expenseCtx.addExpenses({ ...expenseData, id: id });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpensForm
        onCancel={onCancelHandeler}
        onSubmit={onConfirmHandeler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValue={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={35}
            onPress={onDeleteHandeler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderRadius: 2,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
