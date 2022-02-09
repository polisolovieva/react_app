import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const inc = () => {
        setCount(count +1);
    }
    const dec = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h3>Current count: {count}</h3>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default Counter;