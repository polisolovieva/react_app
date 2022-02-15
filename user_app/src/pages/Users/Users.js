import React, {useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import "./users.css"

const Users = () => {
    const [users, setUsers] = useState([
        {
            name:'Franko',
            age:32,
            country: 'USA',
        },
        {
            name:'Stefano',
            age:25,
            country: 'Italy',
        },
        {
            name:'Macumoto',
            age:66,
            country: 'Japan',
        },
    ])
    return (
        <div className="container">
            <UserAdd users = {users} setUsers = {setUsers}/>
            <UserList users={users}/>
        </div>
    );
};

export default Users;