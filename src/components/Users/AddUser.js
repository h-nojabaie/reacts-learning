import { useState } from 'react';
import classes from './AddUser.module.css';
import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser=(props)=>{
    const [enteredUsername,setUsername]=useState("");
    const [enteredAge,setAge]=useState("");
    const usernameChangeHandler=(event)=>{
        setUsername(event.target.value);

    };
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);

    };

    const AddUserHandler=(event)=>{
        event.preventDefault();
        const UserData={
            username:enteredUsername,
            age:enteredAge,
           
        };
        // props.onSaveUser(UserData);
        console.log(UserData);
        //cleared the input ,after the form was submitted
        setUsername('');
        setAge('');
      

    };
  return (
    <Card className={classes.input}>
         <form onSubmit={AddUserHandler}>
    
          <label htmlFor="username">username</label>
          <input id="username" type='text' onChange={usernameChangeHandler}/>
       
       
          <label htmlFor="age">Age</label>
          <input id ="age" type='number' min='0.01' step='0.01' onChange={ageChangeHandler} />
    
          <Button type='submit'>Add Expense</Button>
      
        </form>
    </Card>
  );
};

export default AddUser;