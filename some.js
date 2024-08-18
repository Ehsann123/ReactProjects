import React , { useState } from 'react';

function example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>
                you clicked {count} times
            </p>
            <button onClick={()=>setCount(count+1)}>
                click 
            </button>
        </div>
    )
}