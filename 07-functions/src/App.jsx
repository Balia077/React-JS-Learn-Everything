import React from 'react'

const App = () => {

  function inputChanged(val){
    console.log(val);
  }

  return (
    <div>
      <input
      onChange={function(elem){
        inputChanged(elem.target.value)
      }} 
      type="text" 
      placeholder='Enter Your Name' 
      />
    </div>
  )
}

export default App
