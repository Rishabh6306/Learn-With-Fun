import React, { useState } from 'react';

const NoteEditor = ({ content, onSave }) => {
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    onSave(editedContent);
  };

  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  return (
    <div className="p-4 border border-gray-300 rounded mb-4">
      <textarea
        className="mb-2 p-2 w-full"
        value={editedContent}
        onChange={handleChange}
      />
      <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 mr-2">
        Save
      </button>
    </div>
  );
};

export default NoteEditor;