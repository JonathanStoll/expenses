import { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

export default function ExpensForm({onCancel, onSubmit, submitButtonLabel}) {

  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const inputChangeHandeler = (inputIdentifier, enteredValue) => {
    setInputValue((oldValue) => {
      return {
        ...oldValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };
 const submitHandeler = ()=> {
const expenseData ={
    amount: +inputValue.amount,
    date: new Date(inputValue.date),
    description: inputValue.description
}
onSubmit(expenseData)
 }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          lable="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandeler.bind(this, "amount"),
            value: inputValue.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          lable="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandeler.bind(this, "date"),
            value: inputValue.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        lable="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandeler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} flat onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandeler}>
            {submitButtonLabel}
         
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 16,
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
