import React, { useState } from "react";
import { records } from '../data/records.js';
import { useNavigate } from "react-router-dom";

function Square({ background, title, alt, onSquareClick }) {
  console.log(background);
  return (
    <div className="square" onClick={onSquareClick}>
        <img src={background} alt={alt}/>
        <p>{title}</p>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  function handleClick(record) {
    navigate("/individual", {state: {record: record}}); 
  }

  const record_squares = records.map((record) => 
      <Square background={record.source} alt={record.alt} title = {record.title} onSquareClick={() => handleClick(record)} />
  )
  
  return(
    <div class="home">
      <h1>Happy 60th, Dad!</h1>
      <h3>Let's listen to some records?</h3>
      <div className="record_container">{record_squares}</div>
  </div>
  );
 
}