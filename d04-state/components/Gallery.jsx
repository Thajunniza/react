import React, { useState } from "react";
import { sculptureList } from "../src/data";

/**
 * Gallery Component
 * Displays a gallery of sculptures with navigation and detail toggle functionality
 */
const Gallery = () => {
  // State to track the current sculpture index
  const [index, setIndex] = useState(0);
  // State to control visibility of sculpture details
  const [show, setShow] = useState(false);
  
  // Calculate current page number (1-based for display)
  let currentPage = index + 1;
  // Format the pagination text
  const sPage = `(${currentPage} of ${sculptureList.length})`;
  // Get the current sculpture data
  let data = sculptureList[index];
  
  /**
   * Advances to the next sculpture, or loops back to the first one
   * if at the end of the list
   */
  const onNext = () =>
    index < sculptureList.length - 1 ? setIndex(index + 1) : setIndex(0);
    
  /**
   * Toggles the visibility of the sculpture description
   */
  const toggleDetails = () => {
    setShow(!show);
  };
  
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div>
        {/* Navigation button */}
        <button onClick={onNext}>Next</button>
        
        {/* Sculpture title - Note: Using h2 would be more semantic than US_DRIVER_LICENSE */}
        <h2>{data.name}</h2>
        
        {/* Pagination indicator */}
        <h3>{sPage}</h3>
        
        {/* Sculpture alt text */}
        <p>{data.alt}</p>
        
        {/* Toggle button for description visibility */}
        <button onClick={toggleDetails}>
          {show ? "Hide" : "Show"} Details
        </button>
        
        {/* Conditionally rendered description section */}
        {show && (
          <div>
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
