import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,detail})
    
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>

      {/* form */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex flex-col gap-4 lg:w-1/2 font-medium items-start p-10'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* Heading Wala Input */}
        <input 
        className='w-full px-5 py-2 border-2 outline-none rounded' 
        type="text" 
        placeholder='Enter Notes Heading'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* Details Wala Input */}
        <textarea 
        className='w-full h-20 px-5 py-2 border-2 outline-none rounded' 
        type="text" 
        placeholder='Enter Details'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        />

        {/* Button to Add Notes */}
        <button
         className='w-full bg-white text-black active:scale-90 outline-none px-5 py-4 rounded'
         >
        Add Notes
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-4 mt-5 h-full overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx} className="h-52 bg-cover w-40 rounded-2xl text-black p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
