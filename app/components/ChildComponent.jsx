import React from 'react';

const ChildComponent = ({text}) => {
    return (
        <div>
            <h1>Children Components</h1>
            <h6>{text}</h6>
        </div>
    );
};

export default ChildComponent;