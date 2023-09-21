import React from 'react';

function Main() {
    return (
        <div className='bg-blue-400'>
            {/* Background Image Section */}
            <div className='h-[82vh] md:h-[86vh] bg-cover flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center p-6 md:pl-14 rounded-br-[10rem] md:rounded-br-[18rem]' style={{backgroundImage: 'url(/MainBgc.jpg)'}}>
                <div className='mt-7 sm:mt-44 md:mt-20 xl:mt-28 m-2 '>
                    {/* Main Heading */}
                    <h1 className='text-yellow-300 my-4 text-4xl lg:text-5xl font-bold md:leading-4 tracking-normal'>
                        Learn With Unlimited Fun
                    </h1>
                    {/* Horizontal Line */}
                    <hr className='m-5 xl:m-10 w-4/5 md:w-9/12' />
                    {/* Main Description */}
                    <p className='w-full md:w-11/12 xl:w-9/12 text-gray-100 ssm:text-2xl sm:text-xl  ssm:leading-8 md:leading-6 tracking-wide md:tracking-tight'>
                        Welcome to the realm of exciting intelligence and boundless creativity at Learn with Fun.
                        We are your ultimate stop for mind-challenging quizzes, engaging games, and informative documentations
                        that expand your knowledge and enhance your skills.
                    </p>
                </div>
                {/* Image (visible on medium-sized screens and above) */}
                <img className='rounded-full rounded-tr-[155rem] lg:my-14 lg:w-3/5 xl:w-1/2 md:w-full hidden md:block'
                    src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg"
                    alt="img"
                />
            </div>
        </div>
    )
}

export default Main;