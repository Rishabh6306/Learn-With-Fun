import React from 'react'

function Card({ heading, paragraph }) {
    return (
        <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-teal-200 p-6 ssm:p-9 sm:p-10 w-full sm:w-7/12 lg:w-5/12 xl:w-3/12 h-80">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
            <p className="text-gray-600">{paragraph}</p>
        </div>
    )
}

export default Card;