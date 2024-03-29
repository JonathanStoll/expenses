import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constents/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpensForm from "../components/manageExpense/ExpenseForm";
import { deleteExpenses, storeExpenses, updateExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function ManageExpense({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
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
    setLoading(true);
    try {
      await deleteExpenses(editedID);
      expenseCtx.deleteExpenses(editedID);
      navigation.goBack();
    } catch (error) {
      setError("could not delete");
      setLoading(false);
    }
  };

  const onCancelHandeler = () => {
    navigation.goBack();
  };
  const onConfirmHandeler = async (expenseData) => {
    setLoading(true);
    try {
      if (isEditing) {
        expenseCtx.updateExpenses(editedID, expenseData);
        await updateExpenses(editedID, expenseData);
      } else {
        const id = await storeExpenses(expenseData);
        expenseCtx.addExpenses({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("could not complet action");
      setLoading(false);
    }
  };

  function errorHandeler() {
    setError(null);
  }

  if (error && !loading) {
    return <ErrorOverlay message={error} onConfirm={errorHandeler} />;
  }
  if (loading) {
    return <LoadingOverlay />;
  }

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
