import React, { useState } from 'react'

interface CounterProps {
    start: number,
    increment: number
}

function Counter({ start, increment }: CounterProps) {
    const [count, setCount] = useState(start);
    const incrementFn = () => {
        setCount(count + increment);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementFn}>Increment</button>
        </div>
    )
}

export default Counter

