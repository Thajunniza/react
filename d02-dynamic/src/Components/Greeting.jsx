import React from "react";

const Greeting = () => {
  const name = "Thaj";
  const date = new Date().getDate();
  return (
    <div>
      <h1>Hello {name} !</h1>
      <p>Date: {date}</p>
    </div>
  );
};

export default Greeting;
