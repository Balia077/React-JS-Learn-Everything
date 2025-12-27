import React, { useState } from 'react'

const App = () => {

  /* const [num, setNum] = useState({user: 'Balaram', age: 20}) */
  const [num, setNum] = useState(10)

  //Normal Update
  /* const changeData = () => {
    const newData = {...num}
    newData.user = 'Sumu'
    newData.age = 10
    setNum(newData)
  } */

  /* const changeData = () => {
    setNum(prev=>({...prev, age:21, user: 'Balia'}))
  } */

  //Batch Update
  const changeData = () => {
    setNum(prev=>(prev + 1))
    setNum(prev=>(prev + 1))
    setNum(prev=>(prev + 1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeData}>click</button>
    </div>
  )
}

export default App
