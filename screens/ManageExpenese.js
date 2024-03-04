import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constents/styles";
import Button from "../components/UI/Button";

export default function ManageExpense({ route, navigation }) {
  const editedID = route.params?.expenseId;

  const isEditing = !!editedID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const onDeleteHandeler = () => {
    navigation.goBack();
  };
  const onCancelHandeler = () => {
    navigation.goBack();
  };
  const onConfirmHandeler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} flat onPress={onCancelHandeler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={onConfirmHandeler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 12,
  },
});
