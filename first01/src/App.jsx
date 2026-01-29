import React, { useState } from 'react'

const App = () => {

    const a = 10

    const [b, setB] = useState(10)

    const abc = () =>{
        console.log("Hello")
        setB(15)
    }

  return (
    // we can return only one thing so in return we should have only one parent element which consists all child elements
    <div>
      <p>The value of the variable a is {a}</p>
      <p>The value of the variable b is {b}</p>
      <button onClick={abc}> Change User </button> 
      <p>Once you click the button the value of B changes</p> 
      {/* the function 'abc' will run after clicking on the  button ***remember do not use () after the function name, otherwise it will run automatically */}
    </div>
  )
}

export default App
