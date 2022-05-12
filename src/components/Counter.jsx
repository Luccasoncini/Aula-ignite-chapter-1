import React, { useState } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    
    return (
        <>

        <h1>
            {counter}
        </h1>

        <button onClick={increment}>
            Incrementarres
        </button>
        <button onClick={decrement}>
            Decrementar
        </button>
        </>
    )
}