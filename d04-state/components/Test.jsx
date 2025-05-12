import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';
import * as R from 'ramda';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function Test() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    if(title.trim()){
      setTodos([...todos,{
        id: nextId++,
        title: title,
        done: false
      }]);
    }
    
  }

  function handleChangeTodo(nextTodo) {
    setTodos(R.map( t => {
      if(t.id === nextTodo.id){
        t.title = nextTodo.title;
        t.done = nextTodo.done;
      }
      return t;
    }))(todos);
    
  }

  function handleDeleteTodo(todoId) {
    const arr = R.filter( t => {
      return t.id != todoId
    });
    setTodos(arr,todos);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
