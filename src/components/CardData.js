import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import vedio  from '../CSS/vedio.mp4'
import '../CSS/Hover.css'
import '../App.css'
import { addItems,cardClick,cardGenre } from '../store/cartSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


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
        <h1 className="text-light mb-4 mx-5"><b>{genre[0]?"Similar Genre":''}</b></h1>
        <div className='container' style={{display:'flex' ,flexWrap:'wrap'}}>
            {genre[0]?.map((data)=>{
            return(
                <div class="card mx-4 my-3" id='card' style={{width: "8rem"}}>
                  <Link to={"/Home/"+ (data?.name ||data?.genre_ids[1] || data?.genre_ids[0] ) } onClick={()=>getCardData(data,genre[0])}>
                    <img src={`${base_url}${data?.poster_path}`}class="card-img-top" alt="..."/>
                  </Link>
                  <button  type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-3" onClick={()=>watchLater(data)} id='addCartBtn'>+</button>
                </div>
            );
            })}
        </div>
         
      </div>

  )
}

export default CardData
