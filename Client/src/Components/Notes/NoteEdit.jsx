// import React, { useState } from 'react';

// function NoteEdit({ note, onSave, onCancel }) {
//   const [editedNote, setEditedNote] = useState(note);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedNote({
//       ...editedNote,
//       [name]: value,
//     });
//   };

//   const handleSaveClick = () => {
//     onSave(editedNote);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
//         <h3 className="font-bold text-lg mb-2">Edit Note</h3>
//         <input
//           type="text"
//           name="headline"
//           value={editedNote.headline}
//           onChange={handleInputChange}
//           className="w-full mb-2 p-2 border border-gray-300 rounded"
//           placeholder="Edit Heading..."
//         />
//         <textarea
//           name="content"
//           value={editedNote.content}
//           onChange={handleInputChange}
//           className="w-full h-40 p-2 border border-gray-300 rounded"
//           placeholder="Edit Description..."
//         ></textarea>
//         <div className="flex justify-end mt-2">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//             onClick={handleSaveClick}
//           >
//             Save
//           </button>
//           <button
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteEdit;