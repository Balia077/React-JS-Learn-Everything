import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1764177235587-a1bbb7867627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1763760523160-4b6f9375ddc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
