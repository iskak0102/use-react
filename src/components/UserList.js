import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null)


    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data})=>setUsers(data))


    }, []);



    const handleDelete = (userId) => {
        const deleteUser=users.filter(user=>user.id!==userId)
        setUsers(deleteUser)
    };



    return (
        <div className={'container'}>

            <div>

                <UserCard users={users} handleDelete={handleDelete}/>


            </div>

        </div>
    );
};

export default UserList;