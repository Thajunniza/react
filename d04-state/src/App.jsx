import { useState } from "react";
import Counter from "../components/Counter";
import '../css/index.css'
import TodoList from "../components/TodoList";
import Gallery from "../components/Gallery";
import Update from "../components/Update";
import ObjectForm from "../components/ObjectForm";
import Array from "../components/Array";
import ShoppingCart from "../components/ShoppingCart";
import Test from "../components/test";
function App() {
  return (
    <>
      <head>
        <title>State</title>
      </head>
      <h1 className="headerTitle">ReactJS State</h1>
      <Counter />
      <TodoList/>
      <div className="flex galFlex">
      <Gallery/>
      <Gallery/>
      </div>
      <Update/>
      <ObjectForm/>
      <Array/>
      <ShoppingCart/>
      <Test/>
    </>
  );
}

export default App;
