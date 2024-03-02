import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpense({route, navigation}){
const editedID = route.params?.expenseId

const isEditing = !!editedID
useLayoutEffect(()=> {

    navigation.setOptions({
    title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
}, [navigation, isEditing])
    return<Text>ManegeExpense</Text>
}