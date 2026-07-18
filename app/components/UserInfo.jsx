import React from 'react';

const UserInfo = ({name,age,email}) => {
    return (
        <div>
            <ul>
                <li>name : {name}</li>
                <li>age : {age}</li>
                <li>email : {email}</li>
            </ul>
        </div>
    );
};

export default UserInfo;