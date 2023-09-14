import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cardClick } from "../store/cartSlice";
import VedioPlay from "./VedioPlay";

const SlideFull = (props) => {

  const storeDispatch = useDispatch();

  const getCard = (value)=>{
    storeDispatch(cardClick(value))
  }
  return (
    <div div className="position-relative">
      <VedioPlay vedioId = {976573}/>
      <div className="container-fluid font-monospace position-absolute top-0 start-0 bg-black bg-opacity-25 ratio ratio-16x9" id="MYslide">
          <div className="container text-light p-5" >
              <h1 className=" my-md-5 text-light px-1 text-uppercase" style={{fontSize:'2rem'}}>
                <b>{props.title}</b>
              </h1>
              <div className="button-group" style={{ height:'auto'}}>
                <Link to={"/Home/"+props.title || props.key} onClick={()=>getCard(props.value)}><button type="button" className="btn btn-danger btn-sm mx-2 "> Play</button></Link>
                <Link to={"/Home/"+props.title || props.key}  type="button" className="btn btn-info btn-sm mx-2 " href="CardData.js" onClick={()=>getCard(props.value)}>
                  More Info
                </Link>       
              </div>
              <h5 className="text-light my-md-5 px-1" style={{overflow: 'hidden',textOverflow: 'ellipsis',width:'50%'}}>
                <b>{props.summary.slice(0,300)}...</b>
              </h5>
            
          </div>
      </div> 
      
    </div>
  );
};

export default SlideFull;
