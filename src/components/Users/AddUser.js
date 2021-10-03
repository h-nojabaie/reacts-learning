import { useState } from 'react';
import classes from './AddUser.module.css';
import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import UsersList from './UsersList';
import ErrorModal from '../UI/ErrorModel';
const AddUser=(props)=>{
    const [enteredUsername,setUsername]=useState("");
    const [enteredAge,setAge]=useState("");
    const [error,setError]=useState();

    const usernameChangeHandler=(event)=>{
        setUsername(event.target.value);

    };
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);

    };

    const AddUserHandler=(event)=>{
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Fill input",
                message:"please fill all inputs to take result"
            })
            return;
          }
          if (+enteredAge < 3) {
            setError({
                title:"Error age",
                message:"fill correct age on  input "
            })
            return;
          }

        const UserData={
            username:enteredUsername,
            age:enteredAge,
           
        };
        props.onAddUser(enteredUsername,enteredAge);
        console.log(UserData);
        //cleared the input ,after the form was submitted
        setUsername('');
        setAge('');
       
      

    };
    const errorHandler=()=>{
        setError(null);
    };
  return (
      <div>
        {error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
        
            <label htmlFor="username">username</label>
            <input id="username" value={enteredUsername} type='text' onChange={usernameChangeHandler}/>
        
        
            <label htmlFor="age">Age</label>
            <input id ="age" type='number' value={enteredAge} min='0.01' step='0.01' onChange={ageChangeHandler} />
        
            <Button type='submit'>Add Expense</Button>
        
            </form>
        </Card>
        </div>
  );
};

export default AddUser;