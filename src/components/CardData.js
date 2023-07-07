import React from 'react'
import { useStateValue } from './StateProvider'



const CardData = () => {
  const [{basket}] = useStateValue();
  console.log(basket.length);

  return (
    <div>
          {basket.map((item)=>{
            return(
            <div className="card" style={{width: '100%',height: '25cm', backgroundColor: 'white'}}>
              <img src={item.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{item.image}</h5>
                  <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                
              </div>
            </div>
            )
    })}
        
    </div>
  )
}

export default CardData
