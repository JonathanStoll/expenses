import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constents/styles";

const DUMMY_EXPENSES =[
    {
        id: 'e1',
        description: 'a pair of shues',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'a book',
        amount: 60.99,
        date: new Date('2022-11-19')
    },
    {
        id: 'e3',
        description: 'food',
        amount: 19.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e4',
        description: 'some comics',
        amount: 9.99,
        date: new Date('2023-01-19')
    },
    {
        id: 'e5',
        description: 'a pair of mangas',
        amount: 5.99,
        date: new Date('2023-12-19')
    }
]


export default function ExpenesesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} piriodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
