import React from 'react'

const App = () => {

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
