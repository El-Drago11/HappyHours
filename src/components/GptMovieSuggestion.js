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
  <>   
    <div className='container-fluid bg-black' style={{display:'flex' ,flexWrap:'wrap'}}>
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
    </div>
  </>
  )
}

export default GptMovieSuggestion
