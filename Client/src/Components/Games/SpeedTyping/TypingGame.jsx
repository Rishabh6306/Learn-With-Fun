import React from 'react'

function TypingGame() {
  return (
    <div className='bg-[url(./src/Components/Games/SpeedTyping/TypingBgc.jpg)] bg-center bg-cover h-screen flex items-center justify-center'>
      <div className="bg-black text-white rounded-xl sm:w-11/12 md:w-9/12 lg:w-1/2 h-5/6 ssm:h-auto ssm:mx-5">
        <div className="border-blue-700 border-2 m-2 ssm:m-7 p-2 ssm:p-5 rounded-2xl">
          <p className='text-gray-400 sm:text-xl tracking-wide mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse beatae, accusamus hic similique mollitia iure. Quidem aspernatur minima et aliquam blanditiis dolor, ducimus, doloribus quam adipisci magni voluptate impedit nesciunt consectetur unde nisi exercitationem eius quae veritatis alias illo voluptatem? Accusamus recusandae in est, eum eligendi voluptatibus ad animi!</p>
          <div className='border-t-2 border-blue-700 flex justify-around pt-4 flex-wrap'>
            <span><strong>Time Left:</strong> 0:00</span>
            <span><strong>Mistake:</strong> 50</span>
            <span><strong>WPM:</strong> 40</span>
            <span><strong>CPM:</strong> 50</span>
            <span><button className='bg-blue-800 py-3 rounded-3xl px-8 mt-2 sm:mt-1'>Try Again</button></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingGame 