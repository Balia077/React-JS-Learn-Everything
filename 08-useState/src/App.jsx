import React, { useState } from 'react'

const App = () => {

  const [h1Val, setH1Val] = useState(0)

  function increase(){
    setH1Val(h1Val + 1)
  }
  function decrease(){
    setH1Val(h1Val - 1)
  }
  function increaseBy5(){
    setH1Val(h1Val + 5)
  }

  return (
    <div className='div'>
      <h1>{h1Val}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseBy5}>Increase by 5</button>
    </div>
  )
}

export default App
