
import React from 'react'

function Main() {
    return (
        <div className='bg-blue-400'>
            <div className='h-[86vh] bg-[url(./src/Components/Home/assests/MainBgc.jpg)] bg-cover flex justify-center p-6 md:pl-14 rounded-br-[10rem] md:rounded-br-[18rem]'>          
             <div className='mt-14 md:mt-28 m-2 '>
                <h1 className='text-yellow-300 my-4 text-4xl lg:text-5xl font-bold md:leading-4 tracking-normal'>Learn With Unlimited Fun</h1>
                <hr className='m-10 w-4/5 md:w-9/12' />
                <p className='w-full md:w-9/12 text-gray-100 ssm:text-2xl sm:text-xl leading-10 md:leading-6 tracking-wide md:tracking-tight'>Welcome to the realm of exciting intelligence and boundless creativity at Learn with Fun. We are your ultimate stop for mind-challenging quizzes, engaging games, and informative documentations that expand your knowledge and enhance your skills.</p>
            </div>
                <img className='rounded-full rounded-tr-[155rem] w-1/2 hidden md:block' src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg" alt="img" />
            </div>
        </div>
    )
}

export default Main;