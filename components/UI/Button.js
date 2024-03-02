import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";

export default function Button({ children, onPress, flat, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <View style={[styles.button, flat && styles.flat]}>
          <Text style={[styles.buttonText, flat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4
  },
});
