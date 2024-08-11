import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

import { BackImage } from '../utils/constant'

const Gpt = () => {
  return (
    <div className='container-fluid my-1'>
      <div className='mb-5 p-3'>
        <GptSearchBar/>
      </div>
      <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <GptMovieSuggestion/>
      </div>
    </div>
  )
}

export default Gpt
