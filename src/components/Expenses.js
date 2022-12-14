import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css';

function Expenses(props) {

    const expenses = [
        {id:'e1', title: 'Toilet Paper', amount: '94.07', date: new Date(2020, 7, 18) },
        {id:'e2', title: 'Car Insurance', amount: '294.67', date: new Date(2021, 2, 28) },
        {id:'e3', title: 'New Tv', amount: '799.67', date: new Date(2021, 6, 14) },
        {id:'e4', title: 'New Desk', amount: '450.67', date: new Date(2021, 5, 12) },
      ];

    return (
        <div className="expenses">
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </div>
    );
}

export default Expenses;