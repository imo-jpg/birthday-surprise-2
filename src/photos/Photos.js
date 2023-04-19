import React, { useState } from "react";
import { stacks } from '../data/stacks.js';
import { useNavigate } from "react-router-dom";
import "./Photosstyle.css"; 


function Stack({ background, onStackClick }) {
  return (
    <div className="stack" onClick={onStackClick} >
        <img src={background}/>
        <p>&#62; Look at this stack</p>
    </div>
  );
}

export default function Photos() {
  
    const navigate = useNavigate();
    function handleClick(stack) {
      navigate("/stack", {state: {stack: stack}}); 
    }
  
    function goHome() {
      navigate("/"); 
    }
  
    const photo_stacks = stacks.map((stack) => 
        <Stack key={stack.id} sender={stack.sender} background={stack.photos[0].source} onStackClick={() => handleClick(stack)} />
    )

    return(
      <div className="page">
        <div className="introtext">
          <h3>You pick up the pile of photos and begin to flip through them</h3>
          <button onClick={() => goHome()}>&#62; put the pile down</button>
        </div>
        <div className="stack_container">{photo_stacks}</div>
    </div>
    );
   
  }