import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";


function App() {
  const expenses = [
    {id:'e1', title: 'Toilet Paper', amount: '94.07', date: new Date(2020, 7, 18) },
    {id:'e2', title: 'Car Insurance', amount: '294.67', date: new Date(2021, 2, 28) },
    {id:'e3', title: 'New Tv', amount: '799.67', date: new Date(2021, 6, 14) },
    {id:'e4', title: 'New Desk', amount: '450.67', date: new Date(2021, 5, 12) },
  ];


  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
