import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const PermissonRP = ({render}) => {
    const {hasPermission} = useContext(UserContext)
    console.log(hasPermission);
    return (
        <div>
            {hasPermission && render("qasem")}
        </div>
    );
};

export default PermissonRP;