import { Text, TextInput, View } from "react-native";

export default function Input({lable, textInputConfig}){
    return <View>
        <Text>{lable}</Text>
        <TextInput {...textInputConfig} />
    </View>
}