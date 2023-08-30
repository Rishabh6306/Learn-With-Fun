import React from 'react'

function Library() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-70%'>
      <img className='w-full h-[72vh]' src="./src/Components/BookStore/images/bg-1.jpg" alt="img" />
      <div className='w-full h-[75vh] absolute top-14 flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-white'>Our Library</h1>
        <img className='w-52' src="./src/Components/BookStore/images/bg2.png" alt="img" />
        <input className='w-2/5 p-4 px-7 text-2xl my-6 rounded-[2.5rem] outline-none ' type="text" placeholder='Search Book Here ...' />
      </div>
    </div>
  )
}

export default Library