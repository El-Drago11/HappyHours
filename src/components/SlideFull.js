import React from "react";
import "../CSS/SlideFull.css";
import {useStateValue} from "./StateProvider" 
import { Margin } from "@mui/icons-material";

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
      <div className="container-fluid font-monospace img-fluid" id="fadebottom" style={{display:'flex',flexDirection:'row',height:'548px', backgroundImage:`url(${props.image})`,backgroundSize:"cover",objectFit:'contain'}}>
          <div className="container-fluid text-light">
            <div className="container-fluid" >
              <h1 className=" my-md-5 text-light px-1 text-uppercase" style={{fontSize:'50px'}}>
                <b>{props.title}</b>
              </h1>
              <div className="button-group">
                <a type="button" className="btn btn-danger mx-md-2 "  onClick={()=>getCard()}href='CardData' >
                  Play
                </a>
                <a type="button" className="btn btn-info mx-md-2 " href="CardData.js">
                  More Info
                </a>       
              </div>
              <h5 className="text-light my-md-5 px-1" style={{overflow: 'hidden',textOverflow: 'ellipsis',width:'50%'}}>
                <b>{props.summary.slice(0,300)}...</b>
              </h5>
            </div>
          </div>
        <div className='fadebottom' style={{}}/>
      </div> 
    </>
  );
};

export default SlideFull;
