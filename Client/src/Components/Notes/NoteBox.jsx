import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteEdit from './NoteEdit'; // Import the NoteEdit component
import axios from 'axios'; // Import Axios for making API requests

function NoteBox({ notes, fetchNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ headline: '', content: '' });

  const handleEditClick = (note) => {
    setIsEditing(true);
    setEditedNote(note);
  };

  const handleDeleteClick = async (note) => {
    try {
      await axios.delete(`http://localhost:3001/api/notes/${note._id}`); // Use the correct URL pattern
      fetchNotes();
      toast("Notes Deleted Succefully")
    } catch (error) {
      console.error('Error deleting note:', error);
      toast('Error deleting note', { type: 'error' });
    }
  };

  const handleSaveClick = (editedNote) => {
    // Update the corresponding note in the notes array
    const updatedNotes = notes.map((note) =>
      note === editedNote ? editedNote : note
    );

    // Implement your save logic here
    // You can send the updatedNotes to your server or update the notes state
    // Then set isEditing to false
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-wrap justify-center p-3 my-5">
      {notes.map((note, index) => (
        <div key={index} className="flex flex-col justify-between m-2 p-2 h-44 w-full sm:w-72 border-2 border-cyan-700 rounded-lg overflow-y-auto">
          <div>
            <h3 className="font-bold text-lg break-words text-[#2874A6]">
              {note.headline}
            </h3>
            <p className="break-words">
              {isEditing && editedNote === note ? editedNote.content : note.content}
            </p>
          </div>
          <div className="flex justify-between my-2">
            {isEditing ? (
              // Show the NoteEdit component when editing
              <NoteEdit
                note={editedNote}
                onSave={(editedNote) => {
                  handleSaveClick(editedNote);
                }}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
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
      ))}
      <ToastContainer />
    </div>
  );
}

export default NoteBox;