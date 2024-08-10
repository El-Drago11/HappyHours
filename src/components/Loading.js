import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../CSS/Hover.css'

const Loading = () => {
  return (
    <>
        <div class="card mx-2 mx-md-5 w-25 h-25" style={{alignItems:'center'}} id='loader'>
            <Skeleton  circle={true} height={'3rem'} width={'2rem'}/> 
            <Skeleton count={2} width={'2rem'} />   
        </div> 
    </>
  )
}

export default Loading
