import React, { useState } from "react";
import { records } from '../data/records.js';
import { useNavigate } from "react-router-dom";
import "./Recordsstyle.css"; 


function Square({ background, title, alt, onSquareClick }) {
  return (
    <div className="square" onClick={onSquareClick} >
        <img src={background} alt={alt}/>
        {/* <p>&#62; {title}</p> */}
        <p>&#62; flip this record over</p>

    </div>
  );
}

export default function Records() {
  const navigate = useNavigate();

  function handleClick(record) {
    navigate("/individual", {state: {record: record}}); 
  }

  function goHome() {
    navigate("/"); 
  }

  const record_squares = records.map((record) => 
      <Square key={record.id} background={record.source} alt={record.alt} title = {record.title} onSquareClick={() => handleClick(record)} />
  )
  
  return(
    <div className="page">
      <div className="introtext">
        <h3>You spread the records out on the ground in front of you and start to look through them.</h3>
        <button onClick={() => goHome()}>&#62; put the records back in the box</button> 
      </div>
      <div className="record_container">{record_squares}</div>
     </div>
  );
 
}