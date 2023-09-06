import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import vedio  from '../CSS/vedio.mp4'
import '../CSS/Hover.css'

import { addItems,cardClick,cardGenre } from '../store/cartSlice';
import { useDispatch ,useSelector} from 'react-redux';

const base_url = "https://image.tmdb.org/t/p/original/"

const CardData = () => {

  const storeDispatch = useDispatch();
  const basket = useSelector((store)=>store.cart.basket);
  const genre = useSelector((store)=>store.cart.genre)

  const watchLater = (data)=>{
    storeDispatch(addItems(data));
  }

  const getCardData = (data,genre) =>{
    storeDispatch(cardClick(data));
    storeDispatch(cardGenre(genre))
  }


  return (
    <div>
        {basket?.map((item)=>{
            return(
            <div className="conatiner" style={{padding:'2rem'}}>
              <ReactPlayer light={<img src={`${base_url}${item?.poster_path}`} alt='Thumbnail'  style={{objectFit:'contain',height:'35rem',width:'100%'}}/>} url= {vedio} poster={item?.image} muted={false} controls={true} playing={true} width="100%" height='35rem' />
              <div className="card-body container-fluid font-monospace my-md-5">
                <h3 className="card-title text-light text-start"><b>{item?.overview}</b></h3>
              </div>
            </div>
            )
        })}
        <div className='row mx-md-2' style={{display:'flex' ,flexWrap:'wrap'}}>
          <h1 className="text-light mb-4"><b>{genre[0]?"Similar Genre":''}</b></h1>
            {genre[0]?.map((data)=>{
            return(
              <div className="col-md-2 my-4">
                <div class="card" id='card' style={{width: "10rem"}}>
                  <Link to={"/Home/"+ (data?.name ||data?.genre_ids[1] || data?.genre_ids[0] ) } onClick={()=>getCardData(data,genre[0])}>
                    <img src={`${base_url}${data?.poster_path}`}class="card-img-top" alt="..."/>
                  </Link>
                  <button  type="button" class="btn btn-danger position-absolute top-0 start-100 translate-middle p-2 my-md-3" onClick={()=>watchLater(data)}>+</button>
                </div>
                
                <button  type="button" class="btn btn-danger position-absolute top-0 start-100 translate-middle px-3 my-md-4" onClick={()=>watchLater(data)}>+</button>
              </div>
            );
            })}
        </div>
         
      </div>

  )
}

export default CardData
