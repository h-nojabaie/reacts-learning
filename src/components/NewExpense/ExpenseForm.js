
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
// start first way to take new input !
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //another way is using one useState instead of 3 useState!!
    // const [userInput,setUserInput]=useState({
    //     enterdeTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    //!!
///!
    const titleChangeHandler =(event)=>{
        //!!
        // setUserInput({...userInput,
        // enterdeTitle:event.target.value})
        //!!
        ///use prevstate!!! better way than second way-this keep latest snapshot of state
        // setUserInput ((preState)=>{
        //     return{...preState,enteredTitle:event.target.value};
        // })
        ///!!!
        // !
        setEnteredTitle(event.target.value);
        //!
    }
    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler =(event)=>{
        //since that request is not sent =>the page will not reload
        event.preventDefault();
        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date (enteredDate)
        };
        props.onSaveExpenseData(ExpenseData);
        console.log(ExpenseData);
        //cleared the input ,after the form was submitted
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');

    };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;