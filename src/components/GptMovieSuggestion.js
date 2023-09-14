import React from 'react'
import { useSelector } from 'react-redux'

const base_url = "https://image.tmdb.org/t/p/original/"

const GptMovieSuggestion = () => {
// Subscribing to the store and Extracting values from the store=>[gpt] 
const {movieNames,movieResults} = useSelector((store)=>store.gpt)

console.log(movieResults)
console.log(movieNames)

// If there is no any movies than return null
if(!movieNames) return null;
  return (
  <div>   
    <h1 className="text-light mb-2 mx-2"><b>{movieNames[0]}</b></h1>
    <div className='container-fluid' style={{display:'flex' ,flexWrap:'wrap'}}>
      {movieNames[0]?.map((data,index)=>{
      return(
          <div class="card mx-4 my-3" id='card' style={{width: "8rem"}}>
              <img src={`${base_url}${data?.poster_path}`}class="card-img-top" alt="..."/>
            <button  type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-3">+</button>
          </div>
      );
      })}
    </div>


    <div className='container-fluid' style={{display:'flex' ,flexWrap:'wrap'}}>
      {movieNames?.map((item,index)=>{
      return(
        <>
          <h1 className="text-light mb-2 mx-2"><b>{item}</b></h1>
          {movieResults[index].map((data,index)=>{
            return(
              <div class="card mx-4 my-3" id='card' style={{width: "8rem"}}>
                <img src={`${base_url}${data?.poster_path}`}class="card-img-top" alt="..."/>
                <button  type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-3">+</button>
              </div>
            )
          })}
          
        </>
      );
      })}
    </div>
      


  </div>
  )
}

export default GptMovieSuggestion
