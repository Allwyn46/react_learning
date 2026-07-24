import { useState } from 'react'

type DemoProps = {}

const UseEffectLearn = ({}: DemoProps) => {
    const [count, setCount] = useState(0)
    return (
        <div className="w-[400px] mt-40">
            <h1 className="font-bold text-6xl">{count}</h1>

            <div className="mt-5 flex justify-between items-center">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default UseEffectLearn
