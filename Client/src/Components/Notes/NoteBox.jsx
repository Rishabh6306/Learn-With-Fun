import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Search from './Search';
import NoteOverlay from './NoteOverlay';

function NoteBox({ notes, fetchNotes }) {
  // State for editing, edited note, search query, and selected note
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ headline: '', content: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = Search(searchQuery, 200); // Debounce the search query
  const [selectedNote, setSelectedNote] = useState(null);
  // Define the server port or default to 3000
  const port = import.meta.env.VITE_REACT_APP_SERVER_PORT || 10000;

  // Filter notes based on the search query
  const filteredNotes = notes.filter((note) =>
    note.headline && note.headline.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Function to open the note overlay
  const openOverlay = (note) => {
    setSelectedNote(note);
  };

  // Function to close the note overlay
  const closeOverlay = () => {
    setSelectedNote(null);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle edit button click
  const handleEditClick = (note) => {
    setIsEditing(true);
    setEditedNote({ ...note });
  };

  // Function to handle delete button click
  const handleDeleteClick = async (note) => {
    try {
      await axios.delete(`http://localhost:${port}/api/notes/${note._id}`);
      setSelectedNote(null);
      fetchNotes();
      toast("Note Deleted Successfully");
    } catch (error) {
      console.error('Error deleting note:', error);
      toast('Error deleting note', { type: 'error' });
    }
  };

  // Function to handle save button click
  const handleSaveClick = async () => {
    try {
      if (!editedNote._id) {
        toast('Note ID is missing. Cannot update the note.', { type: 'error' });
        return;
      }

      const response = await axios.put(`http://localhost:${port}/api/notes/${editedNote._id}`, editedNote);
      const updatedNote = response.data;

      if (!notes) {
        // If notes is undefined, initialize it as an empty array
        fetchNotes([]);
      }

      // Update the notes array with the updated note
      const updatedNotes = notes.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      );

      fetchNotes(updatedNotes); // Assuming fetchNotes is a function that updates the notes state
      setIsEditing(false);
      toast('Note Updated Successfully', { type: 'success' });
    } catch (error) {
      console.error('Error updating note:', error);
      toast('Error updating note', { type: 'error' });
    }
  };

  // Function to handle cancel edit button click
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* Search input */}
      <input type="text" placeholder='Search Notes By Headline' onChange={handleSearch} className='mx-12 my-3 p-2 rounded-lg bg-[#4363a1] md:w-11/12 w-9/12 outline-none border-blue-400 border-2 ' />

      <div className="flex flex-wrap justify-center p-3 my-5">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-4xl py-6 text-red-500 font-bold">Not found</p>
        ) : (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              onClick={() => openOverlay(note)}
              className="flex flex-col justify-between m-2 p-2 h-52 w-full sm:w-72 border-2 border-cyan-700 rounded-lg overflow-y-auto"
            >
              <div>
                {/* Note headline */}
                <h3 className="font-bold text-lg break-words text-[#2874A6]">
                  {note.headline}
                </h3>
                {/* Note content (editable if isEditing is true) */}
                <p className="break-words h-24 overflow-y-auto">
                  {isEditing && editedNote._id === note._id ? editedNote.content : note.content}
                </p>
              </div>
              <div className="flex justify-between my-2">
                {isEditing ? (
                  <div className="flex">
                    {/* Save and cancel buttons while editing */}
                    <button
                      className="text-green-600 cursor-pointer text-bold mr-2"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                    <button
                      className="text-red-600 cursor-pointer text-bold"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Edit and delete buttons */}
                    <span
                      className="text-red-600 cursor-pointer text-bold"
                      onClick={() => handleEditClick(note)}
                    >
                      <FiEdit />
                    </span>
                    <span
                      className="text-blue-700 cursor-pointer"
                      onClick={() => handleDeleteClick(note)}
                    >
                      <RiDeleteBin4Line />
                    </span>
                  </>
                )}
              </div>
            </div>
          ))
        )}
        <ToastContainer />
      </div>

      {/* Note overlay */}
      {selectedNote && (
        <NoteOverlay notes={notes} note={selectedNote} onClose={closeOverlay} onSave={handleSaveClick} fetchNotes={fetchNotes} setIsEditing={setIsEditing} />
      )}
    </>
  );
}

export default NoteBox;