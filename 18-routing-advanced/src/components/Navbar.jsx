import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Sheriyans</h2>
      <div className='flex gap-8 text-lg font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
