import React, {useMemo, useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import "./users.css"
import UserSortAndSearch from "./UserSortAndSearch";

const Users = () => {
    const [users, setUsers] = useState([
        {
            id:1,
            name:'Franko',
            age:32,
            country: 'USA',
        },
        {
            id:2,
            name:'Stefano',
            age:25,
            country: 'Italy',
        },
        {
            id:3,
            name:'Macumoto',
            age:66,
            country: 'Japan',
        },
    ])

    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const sortedUsers = useMemo(() => {
        if (sorter) {
            return [...users].sort((a, b) => b.age - a.age)
        }
        return [...users].sort((a, b) => a.age - b.age)
    }, [sorter, users])

    const sortedAndSearchedUsers = useMemo(() => {
        return sortedUsers.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedUsers])

    return (
        <div className="container">
            <UserAdd users = {users} setUsers = {setUsers}/>
            <UserSortAndSearch setSorter={setSorter} setSearchQuery={setSearchQuery}/>
            <UserList users={users} setUsers = {setUsers} sortedAndSearchedUsers={sortedAndSearchedUsers}/>
        </div>
    );
};

export default Users;