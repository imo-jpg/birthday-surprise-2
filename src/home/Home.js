import React, { useState } from "react";
import { records } from '../data/records.js';
import { useNavigate } from "react-router-dom";


function Square({ background, title, alt, onSquareClick }) {

  return (
    <div className="square" onClick={onSquareClick}>
        <img src={background} alt={alt}/>
        {/* <p>{title}</p> */}
    </div>
  );
}

function LinerNotes ({ current }) {
  console.log(current);
  if (current != null) {
    return (
      <div className="main">
        <h2>{current.title} by {current.artist}</h2>
        <h4>{current.message}</h4>
        <p>--{current.sender}</p>
      </div>
  );
  } else {
    return null;
  }
}

export default function Home() {
  const [targetRecord, setTargetRecord] = useState(null);

  function handleClick(record) {
    setTargetRecord(record);
  }

  const record_squares = records.map((record) => 
      <Square background={record.source} alt={record.alt} title = {record.title} onSquareClick={() => handleClick(record)} />
  )
  
  return(
    <div className="home">
      <div className="main_page">
        <h1>Happy 60th, Dad!</h1>
        <h3>Let's listen to some records?</h3>
        <LinerNotes current={targetRecord} />
      </div>
      <div className="record_container">{record_squares}</div>
  </div>
  );
 
}