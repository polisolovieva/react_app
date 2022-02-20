import React from 'react';
import "./users.css"

const UserList = ({users, setUsers, sortedAndSearchedUsers}) => {
    const deletePost = (id) => {
        const confirm = window.confirm("Do you really want to delete it?")
        if (confirm) {
            setUsers(users.filter((user) => user.id !== id))
        }
    }
    return (
        <table className="m-2 table table-hover">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </thead>
            <tbody>
            {sortedAndSearchedUsers.map((user,index) =>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td><button onClick={() => deletePost(user.id)} className="btn btn-danger">Delete</button></td>
            </tr>)}
            </tbody>

        </table>
    )
};

export default UserList;