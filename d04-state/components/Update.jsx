import { useState } from "react";

const Update = () => {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  return (
    <div className="toDo">
      <div className="flex">
        <h1>Normal State Function:   </h1>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
          }}
        >
          +3
        </button>
      </div>
      <div className="flex">
      <h1>Updatter State Function:   </h1>
      <h1>{number1}</h1>
      <button
        onClick={() => {
          setNumber1((n) => n + 1);
          setNumber1((n) => n + 1);
          setNumber1((n) => n + 1);
        }}
      >
        +3
      </button>
      </div>
    </div>
  );
};

export default Update;
