import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addItems, cardClick, cardGenre } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import '../CSS/Hover.css';

const base_url = "https://image.tmdb.org/t/p/original/"


const GptMovieSuggestion = () => {
  // Subscribing to the store and Extracting values from the store=>[gpt] 
  const { movieNames} = useSelector((store) => store.gpt)
  const storeDispatch = useDispatch();


  // If there is no any movies than return null
  if (!movieNames) return <><h1 className='text-center text-light'>What is on you mind?</h1></>;
  return (
    <>

      {movieNames.map((data, index) => {
        return (
            <div class="card mx-2 mx-md-4 my-4 my-md-3 position-relative d-flex" id={`cardSerached_${index}`} style={{ width: "12rem" }} key={index}>
              <Link
            to={`/Home/${data.name || data.genre_ids[1] || data.genre_ids[0]}`}
            onClick={() => {
              storeDispatch(cardClick(data));
              storeDispatch(cardGenre(movieNames));
            }}
          >
            <img src={`${base_url}${data?.poster_path}`} className="card-img-top" alt="..." onError={(e) => e.target.closest('.card').classList.add('d-none')} />
          </Link>
              <button type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-3" 
              onClick={(e) => {
                storeDispatch(addItems(data));
            }}>+</button>
            </div>
          
        )
      })}

      {/* GPT serched  */}
      {/* <div className='container-fluid bg-black' style={{display:'flex' ,flexWrap:'wrap'}}>
            {movieNames?.map((item,index)=>{
            return(
              <>
                <h1 className="container-fluid text-light mb-2 my-3"><b>{item}</b></h1>
                {movieResults[index].map((data,)=>{
                  return(
                    <div class="card mx-2 mx-md-4 my-2 my-md-3 position-relative" id='card' style={{width: "7rem"}}>
                      <img src={`${base_url}${data?.poster_path}`} className="card-img-top" alt="..."/>
                      <button  type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-3">+</button>
                    </div>
                  )
                })}
              </>
            )})}
          </div> */}
    </>
  )
}

export default GptMovieSuggestion
