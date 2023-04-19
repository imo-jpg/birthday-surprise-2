import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { stacks } from '../data/stacks.js';
import "./OneStackstyle.css"; 

function Stack({ background }) {
  return (
    <div className="one_stack" >
        <img src={background}/>
    </div>
  );
}

export default function OneStack() {

  const { state } = useLocation();
  const { stack } = state;
  console.log(stack);

  const navigate = useNavigate();

  function goBack() {
    navigate("/photos"); 
  }

  const one_stack = stack.photos.map((photo) => 
    <Stack key={photo.id} background={photo.source} />
  )
  
  return(
    <div className="page">
      <div className="introtext">
        <h3>{stack.message}</h3>
        <p>--{stack.sender}</p>
        <button onClick={() => goBack()}>&#62; put this stack back in the pile</button> 
      </div>
      <div className="one_stack_container">{one_stack}</div>
     </div>
  );
 
}