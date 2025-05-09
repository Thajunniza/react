import React, { useState } from 'react';
import * as R from 'ramda';

/**
 * Array Component
 * A component that demonstrates adding items to an array using Ramda
 */
const Array = () => {
  // State for the list of authors
  const [authors, setAuthors] = useState(['Chris', 'Annie']);
  
  // State for the input field
  const [input, setInput] = useState('');
  
  /**
   * Updates the input state as user types
   * @param {Object} e - The input change event
   */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  /**
   * Adds the current input value to the authors array using Ramda's append
   * Only adds if input is not empty
   */
  const addAuthor = () => {
    if (input.trim()) {
      // R.append creates a new array with the input added at the end
      setAuthors(R.append(input, authors));
      setInput(''); // Clear the input field after adding
    }
  };

  return (
    <div className="toDo">
      <h1>Authors List</h1>
      <h2>Add list of Authors</h2>
      
      {/* Input form for adding new authors */}
      <div className="input-container">
        <input 
          value={input} 
          onChange={handleInputChange}
          placeholder="Enter author name"
          type="text"
        />
        <button onClick={addAuthor}>Add Author</button>
      </div>
      
      {/* Display the list of authors using Ramda's map */}
      <ul className="authors-list">
        {R.map((author) => (
          <li key={author}>{author}</li>
        ), authors)}
      </ul>
    </div>
  );
};

export default Array;
