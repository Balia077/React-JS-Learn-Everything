import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div>
            <button
                onClick={()=>{
                    navigate('/')
                }}
                className='font-medium bg-emerald-700 m-2 cursor-pointer active:scale-95 px-5 py-2 rounded'>Back To Home Page
            </button>
            <button
                onClick={()=>{
                    navigate(-1)
                }}
                className='font-medium bg-emerald-700 m-2 cursor-pointer active:scale-95 px-5 py-2 rounded'>Back
            </button>
            <button
                onClick={()=>{
                    navigate(+1)
                }}
                className='font-medium bg-emerald-700 m-2 cursor-pointer active:scale-95 px-5 py-2 rounded'>Next
            </button>
        </div>
    )
}

export default Navbar2
