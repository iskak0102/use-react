import React from "react";
const UserCard = ({users, handleDelete, handleEdit})=>{
    return (
        <div className={'row'}>
            {users.map((user) => (
                <div className={'col-4'}>
                    <div className="box">
                        <h5>Name: <span key={user.id}>
                         {user.name}</span></h5>
                        <h5>Username: <span key={user.id}>{user.username}</span></h5>
                        <h5>Email: <span key={user.id}>{user.email}</span></h5>
                        <h5>Phone: <span key={user.id}>{user.phone}</span></h5>
                        <div className="btn-box">
                            <button className={'deleteBtn'} onClick={()=>handleDelete(user.id)}>Delete</button>
                            <button className={'editBtn'} onClick={handleEdit}>Edit</button>
                        </div>
                    </div>

                </div>

            ))}
        </div>
    )
}
export default UserCard