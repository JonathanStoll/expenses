import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";

export default function Input({ lable, textInputConfig, style, isValid }) {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, isValid && styles.invalidLabel]}>{lable}</Text>
      <TextInput style={[inputStyles, isValid && styles.invalidInput]} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    fontSize: 18,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel:{
    color: GlobalStyles.colors.error500
  },
  invalidInput:{
backgroundColor: GlobalStyles.colors.error50
  }
});
