import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";

export default function ExpensForm() {
  const amountChangeHandeler = () => {};
  const dateChangeHandeler = () => {};
  const descriptionChangeHandeler = () => {};
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          lable="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandeler,
          }}
          style={styles.rowInput}
        />
        <Input
          lable="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: dateChangeHandeler,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        lable="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: descriptionChangeHandeler,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1
  },
  form:{
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16
  }
});
