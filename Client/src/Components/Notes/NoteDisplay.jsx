import React, { useEffect, useState } from 'react';
import NoteBox from './NoteBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function NoteDisplay() {
  // State to hold the note headline, content, and the list of notes
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);
  // Define the server port or default to 3000
const port = import.meta.env.VITE_REACT_APP_SERVER_PORT || 10000;

  // useEffect to fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to fetch notes from the server
  const fetchNotes = () => {
    axios.get(`http://localhost:${port}/`) // Update the endpoint to the correct one
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.error('Error fetching notes:', err); // Handle errors
      });
  };

  // Function to handle the submission of a new note
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both headline and content are not empty
    if (headline.trim() === '' || content.trim() === '') {
      toast('Both Fields are required');
      return;
    }

    // Send a POST request to add a new note
    axios.post(`http://localhost:${port}/createUser`, { headline, content })
      .then(result => {
        // After successful addition, fetch notes again to update the list
        fetchNotes();
        // Clear the input fields
        setHeadline('');
        setContent('');
        toast("Notes Added Successfully")
      })
      .catch(error => {
        console.log(error)
        toast('Error Adding Notes', { type: 'error' });
      });
  }

  return (
    <div className="bg-blue-950 text-white">
      <div className="flex items-center justify-center p-3">
        <div className="flex flex-col items-center justify-center p-4 w-full md:w-2/6 border-2 shadow-lg border-indigo-400 rounded-lg">
          <h1 className='text-3xl font-bold leading-relaxed tracking-widest '>Add Notes</h1>

          {/* Input field for the note headline */}
          <input
            type="text"
            maxLength={55}
            className='w-full bg-[#3c4366] outline-none p-2 text-xl sm:text-2xl'
            value={headline} required
            onChange={(e) => setHeadline(e.target.value)}
            placeholder='Notes Headline'
          />

          {/* Textarea for note content */}
          <textarea
            className='my-2 bg-[#3c4366] w-full outline-none p-3 text-xl sm:text-2xl'
            cols="20"
            rows="4"
            value={content} required
            onChange={(e) => setContent(e.target.value)}
            placeholder='Write Here..'
          ></textarea>

          {/* Button to submit the note */}
          <button
            className='bg-[#0ea5e9] text-white py-2 px-4 rounded-xl active:bg-[#e90e4c] w-fit'
            onClick={handleSubmit}
          >
            Add Notes
          </button>

          {/* Container for toast notifications */}
          <ToastContainer />
        </div>
      </div>

      {/* Pass the notes and fetchNotes function to the NoteBox component */}
      <NoteBox notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
}

export default NoteDisplay;