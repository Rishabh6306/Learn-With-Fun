import React, { useState } from 'react';
import NoteBox from './NoteBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotesPage() {
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const handleSubmit = () => {
    if (headline.trim() === '' || content.trim() === '') {
      toast('Both Fields are required');
      return;
    }

    const newNote = {
      headline,
      content,
    };

    // Add the new note to the notes array
    setNotes([...notes, newNote]);

    // Clear the input fields
    setHeadline('');
    setContent('');
  };

  return (
    <div className="bg-[aqua]">
      <div className="flex items-center justify-center p-3">
        <div className="flex flex-col items-center justify-center p-4 w-full md:w-2/6 border-2 shadow-lg border-indigo-400 rounded-lg">
          <h1 className='text-3xl font-bold leading-relaxed tracking-widest '>Add Notes</h1>
          <input
            type="text"
            maxLength={55}
            className='w-full bg-[#7afff4] outline-none p-2 text-xl sm:text-2xl text-green-500'
            value={headline} required
            onChange={(e) => setHeadline((e.target.value))}
            placeholder='Notes Headline'
          />
          <textarea
            className='my-2 bg-[#7afff4] w-full outline-none p-3 text-xl sm:text-2xl text-green-500'
            cols="20"
            rows="4"
            value={content} required
            onChange={(e) => setContent(e.target.value)}
            placeholder='Write Here..'
          ></textarea>
          <button
            className='bg-[#0ea5e9] text-white py-2 px-4 rounded-xl active:bg-[#e90e4c] w-fit'
            onClick={handleSubmit}
          >
            Add Notes
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* Boxes par Notes  */}
      <NoteBox notes={notes} />
    </div>
  );
}

export default NotesPage;