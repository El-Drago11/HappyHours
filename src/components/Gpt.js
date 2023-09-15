import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

import { BackImage } from '../utils/constant'

const Gpt = () => {
  return (
    <div className='container-fluid my-1' style={{height:'100vh', backgroundImage:`url(${BackImage})`,backgroundSize:'cover'}}>
    <div className='mb-5 p-3'>
      <GptSearchBar/>
    </div>
      <GptMovieSuggestion/>
    </div>
  )
}

export default Gpt
