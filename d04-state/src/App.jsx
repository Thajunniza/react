import { useState } from "react";
import Counter from "../components/Counter";
import '../css/index.css'
import TodoList from "../components/TodoList";
import Gallery from "../components/Gallery";
import Test from "../components/test";
import Update from "../components/Update";
import ObjectForm from "../components/ObjectForm";
import Array from "../components/Array";
function App() {
  return (
    <>
      <head>
        <title>State</title>
      </head>
      <h1 className="headerTitle">ReactJS State</h1>
      {/* <Counter />
      <TodoList/>
      <div className="flex galFlex">
      <Gallery/>
      <Gallery/>
      </div>
      <Update/>
      <ObjectForm/>
      <Array/> */}
      <Test/>
    </>
  );
}

export default App;
