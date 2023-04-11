import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homestyle.css"; 

function Records({onOptionClick}) {
  return (
    <h3 className="option" onClick={onOptionClick}>
        &#62; Start looking through the box of records
    </h3>
  );
}

function Photos({onOptionClick}) {
  return (
    <h3 className="option" onClick={onOptionClick}>
        &#62; Pick up the pile of photos
    </h3>
  );
}

export default function Home() {
  const navigate = useNavigate();

  function handleClick(destination) {
    navigate(destination); 
  }
  
  return(
    <div className="home">
      <h1>
        You're in a room.
        Warm afternoon light comes in through a window looking out onto a garden of wildflowers.
        To your left is a cabinet. On top of the cabinet you can see a pile of photographs. 
        Next to the cabinet is a box of records. 
        What would you like to do?
      </h1>
      <div className="options">
        <Records  onOptionClick={() => handleClick("/records")}/>
        <Photos onOptionClick={() => handleClick("/photos")}/>
      </div>
  </div>
  );
 
}