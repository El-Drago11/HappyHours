import React from "react";
import "../CSS/SlideFull.css";
import {useStateValue} from "./StateProvider" 
import { Link } from "react-router-dom";

const SlideFull = (props) => {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)

  const getCard = ()=>{
    dispatch({
      type:"Card_Click",
      // transfering the data
      item:{
        image : props.image
      }
    })
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
                <Link to="/CardData" onClick={()=>getCard()}><button type="button" className="btn btn-danger mx-md-2 "> Play</button></Link>
                <Link to="/CardData"  type="button" className="btn btn-info mx-md-2 " href="CardData.js" onClick={()=>getCard()}>
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
