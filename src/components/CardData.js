import React from 'react'
import { useStateValue } from './StateProvider'

const CardData = () => {
  const [{basket}] = useStateValue();
  console.log(basket.length);

  return (
    <div>
          {basket.map((item)=>{
            return(
            <div className="card conatiner-fluid">
              <img src={item.image} className="img-fluid" alt="..." style={{maxHeight:'30rem', backgroundSize:"center center",objectFit:'cover'}}/>
              <div className="card-body container-fluid font-monospace">
                <h3 className="card-title"><b>{item.summary}</b></h3>
              </div>
            </div>
            )
    })}
    </div>
  )
}

export default CardData
