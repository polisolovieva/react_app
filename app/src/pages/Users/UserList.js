import React from 'react';
import "./users.css"

const UserList = ({users}) => {
    return (
        <table className="m-2 table table-hover">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </thead>
            <tbody>
            {users.map((user,index) =>
            <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
            </tr>)}
            </tbody>

        </table>
    )
};

export default UserList;