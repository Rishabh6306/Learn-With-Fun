import React from 'react';
import { FaTimes } from 'react-icons/fa';

const DetailCard = ({ show, item, onClose }) => {
    // If 'show' prop is false, render nothing (null)
    if (!show) {
        return null;
    }

    // Check if 'item' has a small thumbnail image link
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        // {/* Full-screen modal */}
        <div className="min-h-screen w-screen fixed top-10 inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-black to-transparent">
            <div className="bg-white w-10/12 h-4/6 p-7 relative box-border overflow-scroll text-2xl">
                {/* Close button */}
                <button className="text-red-400 absolute top-4 right-5 outline-none border-none text-xl bg-transparent" onClick={onClose}><span className='fixed'><FaTimes /></span></button>

                <div className="mt-8 flex flex-col md:flex-row justify-center">
                    {/* Thumbnail image */}
                    <img className='mr-8 w-40 h-52' src={thumbnail} alt="" />

                    <div className="info">
                        {/* Book title */}
                        <h1 className='text-3xl'>{item.volumeInfo.title}</h1>

                        {/* Author */}
                        <h3 className='text-xl mt-5 text-green-700'>{item.volumeInfo.authors}</h3>

                        {/* Publisher and published date */}
                        <h4 className='text-blue-700'>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />

                        {/* Link to preview the book */}
                        <a href={item.volumeInfo.previewLink} target='blank'>
                            <button className='outline-none border-none w-24 rounded-md bg-[#24a0ed] text-white font-bold px-1 py-2'>More</button>
                        </a>
                    </div>
                </div>

                {/* Book description */}
                <h4 className="mt-[2rem] text-justify text-[14px] sm:text-[17px]">{item.volumeInfo.description}</h4>
            </div>
        </div>
    );
};

export default DetailCard;
