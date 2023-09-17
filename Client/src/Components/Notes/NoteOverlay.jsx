import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NoteOverlay({ note, onClose, onSave, notes, fetchNotes, setIsEditing }) {
  const [editedNote, setEditedNote] = useState(note);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Handle input changes (headline and content)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  // Handle Save button click
  const handleSaveClick = async () => {
    try {
      if (!editedNote._id) {
        toast('Note ID is missing. Cannot update the note.', { type: 'error' });
        return;
      }

      const response = await axios.put(`http://localhost:3001/api/notes/${editedNote._id}`, editedNote);
      const updatedNote = response.data;

      // Update the notes array with the updated note
      const updatedNotes = notes.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      );

      fetchNotes(updatedNotes);
      setIsEditing(false);
      toast('Note Updated Successfully', { type: 'success' });
      onClose();
    } catch (error) {
      console.error('Error updating note:', error);
      toast('Error updating note', { type: 'error' });
    }
  };

  // Handle showing a success toast when the note is successfully saved
  useEffect(() => {
    if (showSavedToast) {
      toast('Successfully Saved', { type: 'success' });
      onClose(); // Close the overlay after showing the toast
    }
  }, [showSavedToast, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-blue-300 text-green-700 p-8 rounded-lg shadow-lg overflow-y-auto w-full md:max-w-[70rem] h-[90%] mx-2">
        <button
          className="absolute top-2 right-9 text-4xl text-[#22ff00]"
          onClick={onClose}
        >
          <span className='fixed'><AiFillCloseCircle /></span>
        </button>
        {/* Input for editing headline */}
        <input
          type='text'
          className="text-xl w-full font-semibold mb-4 text-center break-words text-blue-700 outline-none active:border active:border-yellow-300 rounded"
          name="headline"
          value={editedNote.headline}
          onChange={handleInputChange}
        />
        {/* Textarea for editing content */}
        <textarea
          name="content"
          value={editedNote.content}
          onChange={handleInputChange}
          rows="4"
          className="w-full h-5/6 p-2 border border-yellow-300 rounded"
          placeholder="Edit Description..."
        ></textarea>
        {/* Save and Cancel buttons */}
        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default NoteOverlay;