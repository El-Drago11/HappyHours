import React from "react";
import "../CSS/SlideFull.css";
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
      <div className="container-fluid font-monospace img-fluid" id="MYslide" style={{display:'flex',flexDirection:'row',height:'548px', backgroundImage:`url(${props.image})`,backgroundSize:"cover", objectPosition:'center center'}}>
          <div className="container-fluid text-light">
            <div className="container" >
              <h1 className=" my-md-5 text-light px-1 text-uppercase" style={{fontSize:'50px'}}>
                <b>{props.title}</b>
              </h1>
              <div className="button-group" style={{ height:'auto'}}>
                <Link to={"/Home/"+props.title || props.key} onClick={()=>getCard(props.value)}><button type="button" className="btn btn-danger mx-md-2 "> Play</button></Link>
                <Link to={"/Home/"+props.title || props.key}  type="button" className="btn btn-info mx-md-2 " href="CardData.js" onClick={()=>getCard(props.value)}>
                  More Info
                </Link>       
              </div>
              <h5 className="text-light my-md-5 px-1" style={{overflow: 'hidden',textOverflow: 'ellipsis',width:'50%',height:"15rem"}}>
                <b>{props.summary.slice(0,300)}...</b>
              </h5>
            </div>
          </div>
      </div> 
      
    </>
  );
};

export default SlideFull;
