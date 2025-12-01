import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }

  return (
    <div>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App
