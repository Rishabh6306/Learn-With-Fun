import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin4Line } from 'react-icons/ri'

function NoteBox({ notes }) {
  return (
    <div className="flex flex-wrap justify-center p-3 my-5">
      {notes.map((note, index) => (
        <div key={index} className="flex flex-col justify-between m-2 p-2 h-44 w-full sm:w-72 border-2 border-cyan-700 rounded-lg">
          <div>
          <h3 className="font-bold text-lg break-words text-[#2874A6]">{note.headline}</h3>
          <p className='break-words'>{note.content}</p>
          </div>
          <div className='flex justify-between my-2'>
            <span className='text-red-600  cursor-pointer text-bold'><FiEdit /></span>
            <span className='text-blue-700 cursor-pointer'><RiDeleteBin4Line /></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteBox;