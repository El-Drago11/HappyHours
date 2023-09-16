import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cardClick } from "../store/cartSlice";

const SlideFull = (props) => {

  const storeDispatch = useDispatch();

  const getCard = (value)=>{
    storeDispatch(cardClick(value))
  }
  return (
    <>
      <h1 className="my-md-3 text-light px-1 text-uppercase">
        <b>{props.title}</b>
      </h1>
      <div className="button-group" style={{ height:'auto'}}>
        <Link to={"/Home/"+props.title || props.key} onClick={()=>getCard(props.value)}><button type="button" className="btn btn-danger btn-sm mx-2 "> Play</button></Link>
        <Link to={"/Home/"+props.title || props.key}  type="button" className="btn btn-info btn-sm mx-2 " href="CardData.js" onClick={()=>getCard(props.value)}>
          More Info
        </Link>       
      </div>
      <div className="text-light my-md-2 px-1 overflow-hidden d-none d-md-block w-50  fs-4">
        <b>{props.summary.slice(0,200)}...</b>
      </div>
    </> 
  );
};

export default SlideFull;
