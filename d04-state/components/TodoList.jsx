import React, { useState } from "react";
import * as R from "ramda"; // Importing Ramda utility library


/**
 * Function which returs formatted date
 */
function formatDate(date) {
    return new Intl.DateTimeFormat( 'en-US',
        { weekday: 'long' }).format(date)
}

/**
 * TodoList Component
 * A simple React component that allows users to add and display todo items.
 */
const TodoList = () => {
  // State to store the list of todos
  const [todos, setTodos] = useState(["Check Emails"]);
  
  // State to manage the input field value
  const [inputValue, setInputValue] = useState("");

  /**
   * Adds the current input value to the todos list
   * Clears the input field after adding
   */
  const addTodo = () => {
    if (inputValue.trim()) { // Prevent adding empty todos
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  /**
   * Updates the input field state as the user types
   * @param {Event} event - The input change event
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="toDo">
      <h1>Todo List for {formatDate(new Date())}</h1>
      
      {/* Input form for adding new todos */}
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new todo"
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add a new Todo</button>
      </div>
      
      {/* List of todos using Ramda's map function */}
      <ol>
        {R.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))(todos)}
      </ol>
    </div>
  );
};

export default TodoList;
