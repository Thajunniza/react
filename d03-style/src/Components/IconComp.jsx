import React from "react";
import { FaBeer } from "react-icons/fa";

const IconComp = () => {
  return (
    <div>
      <FaBeer />
      <FaBeer size={30} />
      <FaBeer size={30} color="gold" />
    </div>
  );
};

export default IconComp;
