import React from 'react'

const App = () => {

  const user = {
    name: 'Balaram',
    age:'19'
  }

  localStorage.setItem('user', JSON.stringify(user))
  
  const user1 = JSON.parse(localStorage.getItem('user'))
  console.log(user1)
  return (
    <div>
      
    </div>
  )
}

export default App
