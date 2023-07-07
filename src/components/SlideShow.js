import React from 'react'
import '../CSS/SlideShow.css'

const SlideShow = (props) => {
  return (
    <>
        <div className="carousel mb-md-3 mx-md-3" id='item' style={{textAlign:'center'}}>
            <img src={props.image} className="card-img-top img-fluid" alt="..."/>
        </div>
    </>
  )
}

export default SlideShow
