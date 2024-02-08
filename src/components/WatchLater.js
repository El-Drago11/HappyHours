import React from 'react';

import { useSelector ,  useDispatch  } from 'react-redux';
import { removeItem,emptyCart } from '../store/cartSlice';//importing the reducer function
import { toast } from 'react-toastify';

const base_url = "https://image.tmdb.org/t/p/original/"

const WatchLater = () => {
    // subscribing to the store
    const cartItem = useSelector((store)=>store.cart.items)
    const storeDispatch = useDispatch();

const clearCart = ()=>{
  storeDispatch(emptyCart());
  toast.error("Cart is cleared")
}
const clearCard = (data)=>{
    storeDispatch(removeItem(data));
  }
  return (
    <div>
      <div className='row mx-md-2' style={{display:'flex' ,flexWrap:'wrap'}}>
            <div className='d-flex justify-content-between my-md-4'>
                <h2 className="text-light"><b>My Movies</b></h2>
                <button  type="button" class="btn btn-outline-danger btn-sm" onClick={()=>clearCart()}>clearCart</button>
            </div>
            {(cartItem.length===0) ? <h1 className='text-light my-md-5 text-center fst-italic' style={{height:'40vh'}}>No Item To watch !!</h1> : '' }
            {cartItem?.map((data)=>{
            return(
              <div className="col-md-2 my-4">
                <div class="card" id='card' style={{width: "10rem"}}>
                  <img src={`${base_url}${data.poster_path}`}class="card-img-top" alt="..."/>
                  <button  type="button" class="btn btn-danger position-absolute top-0 start-100 translate-middle p-2 my-md-3" onClick={()=>clearCard(data)}>-</button>
                </div>
              </div>
            );
            })}
        </div>
    </div>
  )
}

export default WatchLater
