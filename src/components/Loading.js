import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../CSS/Hover.css'

const Loading = () => {
  return (
    <>
         {/* <div className='card col-md-2 mx-md-4' style={{alignItems:'center'}}>
             <Skeleton circle={true} maxheight={250} maxwidth={150}/>
          </div> */}
        <div class="card mx-md-5" style={{width: "15rem", height:'15rem', alignItems:'center'}} id='loader'>
            <Skeleton  circle={true} height={'10rem'} width={'10rem'}/> 
            <Skeleton count={3} width={'10rem'} />   
        </div> 
    </>
  )
}

export default Loading
