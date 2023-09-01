import React from 'react'
import ReactPlayer from 'react-player'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';
import vedio  from '../CSS/vedio.mp4'
import '../CSS/Hover.css'

const base_url = "https://image.tmdb.org/t/p/original/"

const CardData = () => {
  const [{basket,genre}, dispatch] = useStateValue();
  console.log(basket.length);
  console.log(genre.length);
  console.log(genre);
  // const {CardData} = useParams();
  const getCard = (value,data)=>{
    dispatch({
      type:"Card_Click",
      
      // transfering the data
      item:{
        key:`${value.id}`,
        image : `${base_url}${value.poster_path}`,
        summary : `${value.overview}`,
      },
      data:data
    })
  }

  return (
    <div>
        {basket.map((item)=>{
            return(
            <div className="conatiner" style={{padding:'2rem'}}>
              <ReactPlayer light={<img src={item.image} alt='Thumbnail'  style={{objectFit:'contain',height:'35rem',width:'100%'}}/>} url= {vedio} poster={item.image} muted={false} controls={true} playing={true} width="100%" height='35rem' />
              <div className="card-body container-fluid font-monospace my-md-5">
                <h3 className="card-title text-light text-start"><b>{item.summary}</b></h3>
              </div>
            </div>
            )
        })}
        <div className='row mx-md-2' style={{display:'flex'}}>
        <h1 className="text-light mb-4"><b>{genre[0]?"Similar Genre":''}</b></h1>
            {genre[0]?.map((data)=>{
            return(
              <div className="col-md-2 my-4">
                <Link to={"/Home/"+ (data.name ||data.genre_ids[1] || data.genre_ids[0] ) } onClick={()=>getCard(data,genre[0])}>
                <div class="card" id='card' style={{width: "10rem"}}>
                  <img src={`${base_url}${data.poster_path}`}class="card-img-top" alt="..."/>
                </div>
                </Link>
              </div>
            );
            })}
          </div>
         
      </div>

  )
}

export default CardData
