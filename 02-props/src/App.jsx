import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Balaram' img='https://images.unsplash.com/photo-1756137074695-88e71b00ef77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
      <Card user='Aman' img='https://images.unsplash.com/photo-1760434875920-2b7a79ea163a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
    </div>
  )
}

export default App
