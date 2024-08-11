import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector ,  useDispatch  } from 'react-redux';
import { removeItem,emptyCart,cardClick,cardGenre } from '../store/cartSlice';//importing the reducer function
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
              <div className="col-md-2 my-4 watchLater">
                <div class="card" id='card' style={{width: "10rem"}}>
                <Link
                  to={`/Home/${data.name || data.genre_ids[1] || data.genre_ids[0]}`}
                  onClick={() => {
                    storeDispatch(cardClick(data));
                    storeDispatch(cardGenre(cartItem));
                  }}
                >
                  <img src={`${base_url}${data.poster_path}`} class="card-img-top" alt="..." onError={(e) => e.target.closest('.watchLater').classList.add('d-none')} />
                </Link>
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
