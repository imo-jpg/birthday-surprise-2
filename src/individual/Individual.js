import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Individualstyle.css"; 



export default function Individual() {
    const { state } = useLocation();
    const {record} = state;

    const navigate = useNavigate();

    function handleClick() {
      navigate("/records", {state: {recordId: record.id}}); 
    }

  return (
    <div className="individual">
    <button onClick={() => handleClick()}>&#62; put this record down</button>
    <div>
        <h2>{record.title}</h2>
        <p>by {record.artist}</p>
        <h3>{record.message}</h3>
        <p>--{record.sender}</p>
    </div>
    </div>
  );
}