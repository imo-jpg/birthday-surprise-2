import React from "react";
import { stacks } from '../data/stacks.js';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Individualstyle.css"; 

function Stack({ background }) {
  return (
    <div className="one_stack" >
        <img src={background}/>
    </div>
  );
}

export default function Individual() {
  const { state } = useLocation();
  const {record} = state;
  let one_stack = {}

  console.log(record);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/records", {state: {recordId: record.id}}); 
  }

  if (record.photos) {
    one_stack = record.photos.map((photo) => 
      <Stack key={photo.id} background={photo.source} />
    )
  }
  
  return (
    <div className="individual">
    <button onClick={() => handleClick()}>&#62; put this record down</button>
    <div>
        <h2>{record.title}</h2>
        <p>by {record.artist}</p>
        <p style={{whiteSpace: "pre-wrap"}}>{record.message}</p>
        <p style={{whiteSpace: "pre-wrap"}}>--{record.sender}</p>
    </div>
    {record.photos && <div className="one_stack_container">{one_stack}</div>}
    </div>
  );
}