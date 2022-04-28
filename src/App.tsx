import React, { useState } from 'react'


interface IApp {
    title: string
}

const App = ({ title }: IApp) => {
    const [state, setState] = useState<number>(0)


    return (
        <div>
            <h1>{title}</h1>
            <h1>Count: {state}</h1>
            <button onClick={() => setState(state + 1)}>Plus</button>
        </div>
    )
}

export default App