import React, { useContext } from 'react';
import { MyContext } from './CountProvider';

function App() {

    const {count, setCount} = useContext(MyContext);
    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => {setCount(count + 1)}}>Increment</button>
            </div>
            <div>
                <button onClick={() => {setCount(count - 1)}}>Decrement</button>
            </div>
        </>
    );
}

export { App };
