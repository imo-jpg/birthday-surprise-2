import React, { useState } from "react";
import { messages } from '../data/messages.js';
import { useNavigate } from "react-router-dom";
import "./Messagesstyle.css"; 

function Message({ message, sender }) {
    return (
        <div className="messages" >
            <p style={{whiteSpace: "pre-wrap"}}>{message}</p>
            <p style={{whiteSpace: "pre-wrap"}}>{sender}</p>
            <p>------</p>
        </div>
      );
}

export default function Messages() {
  
    const navigate = useNavigate();

    function goHome() {
      navigate("/"); 
    }
  
    const all_messages = messages.map((message) => 
        <Message key={message.id} sender={message.sender} message={message.message} />
    )

    return(
      <div className="page">
        <div className="introtext">
          <h3>You open the card. Inside are a few messages.</h3>
          <button onClick={() => goHome()}>&#62; put the card down</button>
        </div>
        <div className="card">{all_messages}</div>
    </div>
    );
   
  }