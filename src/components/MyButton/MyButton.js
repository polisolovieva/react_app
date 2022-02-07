import React from 'react';

const MyButton = ({children, changeText}) => {
    return (
        <button onClick={() => changeText("Thanks!")}>
            {children}
        </button>
    );
};

export default MyButton;