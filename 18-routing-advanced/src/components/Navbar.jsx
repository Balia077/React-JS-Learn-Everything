import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Sheriyans</h2>
      <div className='flex gap-8 text-lg font-bold'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">Product</a>
      </div>
    </div>
  )
}

export default Navbar
