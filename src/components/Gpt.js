import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const Gpt = () => {
  return (
    <div className='container-fluid my-5' style={{height:'100vh'}}>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default Gpt
