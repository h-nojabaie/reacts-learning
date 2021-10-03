import React from "react";
import AddUser from "./AddUser";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList=(props)=>{



return(
    <Card className={classes.user}>
        <ul >
            {props.users.map((user) => (
                <li key={user.id}>{user.username} ({user.age} years old)</li>

            
            ))}
        </ul>
        </Card>
)
}
export default UsersList;
