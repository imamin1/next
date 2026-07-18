import React from 'react';
import PropTypes from "prop-types"
const ChildComponent = ({text,children}) => {
    return (
        <div>
            <h1>Children Components</h1>
            <h6>{text}</h6>
            {children}
        </div>
    );
};

export default ChildComponent;


ChildComponent.PropTypes={
    text : PropTypes.string.isRequired,
};