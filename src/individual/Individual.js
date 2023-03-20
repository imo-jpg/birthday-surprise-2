import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Individual({onClick}) {
    const { state } = useLocation();
    const {record} = state;

    const navigate = useNavigate();

    function handleClick() {
      navigate("/"); 
    }

  return (
    <div>
    <button onClick={() => handleClick()}>go home</button>
    <div>
        {record.title}
    </div>
    </div>
  );
}