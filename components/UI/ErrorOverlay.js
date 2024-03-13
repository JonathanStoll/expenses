import { Text, StyleSheet, View, Button } from "react-native";
import { GlobalStyles } from "../../constents/styles";

export default function ErrorOverlay({message}) {
  return (
    <View style={styles.container}>
      <Text>An error occurred!</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text:{
    
  }
});