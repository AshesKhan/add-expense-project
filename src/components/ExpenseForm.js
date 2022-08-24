import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
    const [enteredTitle, setEnterTitle] = useState('');
    const [enteredAmount, setEnterAmount] = useState('');
    const [enteredDate, setEnterDated] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enterAmount:'',
    //     enteredDate:'',
    // });

    const titleChangehandler = (event) => {
        setEnterTitle(event.target.value)
        console.log(event.target.value);

        //     setUserInput({
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     });
        // setUserInput((prevState) => {
        //     return {...prevState,enteredTitle: event.target.value};
        // });


    };

    const amountChangehandler = (event) => {
        setEnterAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value,
        // });
    };

    const dateChangehandler = (event) => {
        setEnterDated(event.target.value)
        //     setUserInput({
        //         ...userInput,
        //         enterDate: event.target.value,
        //     });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDated('');

    };





    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangehandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>)
};

export default ExpenseForm;