import React from 'react';
import { AiFillCloseCircle }  from 'react-icons/ai'

function NoteOverlay({ note, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg overflow-y-auto w-full md:max-w-2xl max-h-96 mx-2">
        <button
          className="absolute top-2 right-9 text-4xl text-[#22ff00]"
          onClick={onClose}
        >
        <span className='fixed'><AiFillCloseCircle/></span>
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center break-words">{note.headline}</h2>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NoteOverlay;