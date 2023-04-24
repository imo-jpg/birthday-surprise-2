import React, { useState, useEffect } from "react";
import { records } from '../data/records.js';
import { useLocation, useNavigate } from "react-router-dom";
import "./Recordsstyle.css"; 


function Square({ background, title, recordkey, photos, onSquareClick }) {


  return (
    <div className="square" onClick={onSquareClick} >
      {/* <img src={records[recordkey].source}/> */}
        <img src={background}/>
        <p>&#62; {title}</p>
        {/* <p>&#62; flip this record over</p> */}

    </div>
  );
}

export default function Records() {

  // const [recordkey, setrecordkey] = useState(0);

  // const {state} = useLocation();
  const navigate = useNavigate();

  function handleClick(record) {
    navigate("/individual", {state: {record: record}}); 
  }

  function goHome() {
    navigate("/"); 
  }

  // function goToNext() {
  //   if (recordkey >= records.length - 1) {
  //     setrecordkey(0);
  //   } else {
  //     setrecordkey(recordkey + 1);
  //   }
  // }


  const record_squares = records.map((record) => 
      <Square key={record.id} photos={record.photos} background={record.source} title = {record.title} onSquareClick={() => handleClick(record)} />
  )

  // useEffect(() => {
  //   console.log(recordkey);
  //   if (state && state.recordId) {
  //     setrecordkey(state.recordId);
  //     state.recordId = null;
  //   }
  // }, [recordkey])
  
  return(
    <div className="page">
      <div className="introtext">
        <h3>You spread {records.length} records out on the ground in front of you and start to look through them.</h3>
        <button onClick={() => goHome()}>&#62; put the records back in the box</button> 
      </div>
      {/* <div className="record_container">
        <Square key={records[recordkey].id} background={records[recordkey].source} alt={records[recordkey].alt} title = {records[recordkey].title} onSquareClick={() => handleClick(records[recordkey])} recordkey={recordkey}/>
        <button onClick={() => goToNext()}>&#62; go to next record </button> 
      </div> */}

      <div className="record_container">{record_squares}</div>
     </div>
  );
 
}