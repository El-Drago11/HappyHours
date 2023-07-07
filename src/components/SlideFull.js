import React from "react";
import "../CSS/SlideFull.css";
import {useStateValue} from "./StateProvider" 

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
      <div className="container-fluid font-monospace" id="fadebottom" style={{display:'flex',flexDirection:'row',height:'548px', backgroundImage:`url(${props.image})`,backgroundPosition:"center center",backgroundSize:"cover",objectFit:'contain'}}>
          <div className="container text-light justify-content-end" style={{width:'50%',marginLeft:'50%'}}>
            <div className="container"  style={{ height:"190px" ,}}>
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
              <h5 className=" text-light my-md-5 px-1">
                <b>{props.summary.slice(0,200)}...</b>
              </h5>
            </div>
          </div>
        <div className='fadebottom' style={{}}/>
      </div> 
    </>
  );
};

export default SlideFull;
