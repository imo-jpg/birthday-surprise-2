import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OneStackstyle.css"; 


export default function OneStack() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/photos"); 
  }
  
  return(
    <div className="page">
      <div className="introtext">
        <h3>This page represents one stack of multiple photos</h3>
        <button onClick={() => goBack()}>&#62; put this stack back in the pile</button> 
      </div>
     </div>
  );
 
}