import React, { useState } from 'react'


const App = () => {
  
  const [a, setA] = useState(0)

  const inc = () => {
    setA(a+1)
  }

  const dec = () => {
    setA(a-1)
  }

  return (
    <div>
      <p>Counter</p>
      <p>{a}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default App
