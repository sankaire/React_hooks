import React, { useEffect, useState } from "react"

const Counter = ({ props }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  const reset = () => setCount(0)

  useEffect(() => {
    document.title = `You have clicked ${count}`
  })

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  )
}

export default Counter
