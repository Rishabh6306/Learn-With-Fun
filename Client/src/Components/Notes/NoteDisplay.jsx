import React, { useEffect, useState } from 'react';
import NoteBox from './NoteBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function NoteDisplay() {
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes when the component mounts
  }, []);

  const fetchNotes = () => {
    axios.get('http://localhost:3001/') // Update the endpoint to the correct one
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.error('Error fetching notes:', err); // Handle errors
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (headline.trim() === '' || content.trim() === '') {
      toast('Both Fields are required');
      return;
    }

    axios.post('http://localhost:3001/createUser', { headline, content })
      .then(result => {
        fetchNotes();
        setHeadline('');
        setContent('');
        toast("Notes Added Succefully")
      })
      .catch(error => {
        console.log(error)
        toast('Error Added Notes', { type: 'error' });
      });
  }

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
            onChange={(e) => setHeadline(e.target.value)}
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

      {/* Pass the notes and fetchNotes function to the NoteBox component */}
      <NoteBox notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
}

export default NoteDisplay;