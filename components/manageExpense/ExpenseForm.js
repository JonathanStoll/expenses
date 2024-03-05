import { View } from "react-native";
import Input from "./Input";

export default function ExpensForm() {
  const amountChangeHandeler = () => {};
  const dateChangeHandeler = () => {};
  const descriptionChangeHandeler = () => {};
  return (
    <View>
      <Input
        lable="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandeler,
        }}
      />
      <Input
        lable="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangeHandeler,
        }}
      />
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
