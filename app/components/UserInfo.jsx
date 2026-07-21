import React from 'react';

const UserInfo = ({name,age,email,handleDelete}) => {
    return (
        <div>
            <ul>
                <li>name : {name}</li>
                <li>age : {age}</li>
                <li>email : {email}</li>
            </ul>
            <button onClick={()=>handleDelete(name)} className='text-red-600'>click me</button>
        </div>
    );
};

export default UserInfo;