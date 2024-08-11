import React, { useRef } from "react";
import language from "../utils/languageConst";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openAi";
import { options } from "../utils/constant";
import { addGptMovieResult } from "../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  // --->Accesing the store
  const langkey = useSelector((store)=>store.config.lang)

  const addSearchText = useRef("");

  // const gptQuery = "Act as a movie recommended system and suggest some movies for the query" + addSearchText.current.value+". Only give me names of movies that are related to that movie genre ,comma seprated like the example Result given ahead. Example result: Golmaal , Gadar, 3Idiot, Sholay , Amar Akbar ANTHONY"

  //----> Search movie in tmbd database
  // const searchMovieTMBD = async(movie)=>{
  //   const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&page=1", options)
  //   const json = await data.json();
  //   return json.results;
  // }



// -----> GPT search list and then find it in TMBD database
  // const handleGptSearch = async()=>{
  // //1----> make an GPT-Api call
  //   const gptResult = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content: gptQuery}],
  //     model: 'gpt-3.5-turbo',
  //   });
  //   if(!gptResult.choices){
  //     console.log("No result Found!!")
  //   }
  //   const listMovie = gptResult.choices?.[0].message?.content?.split(',')

  // //2---->search for each movie in TMBD database
  //     const promiseArray = listMovie?.map(name=>searchMovieTMBD(name));
  //     // --> it will give an array of promises => [promise, promise, promise, promise, promise]

  //     const TMBDresult = await Promise.all(promiseArray);
  //     //---> Promise.all(): takes all the promises and resolved all the promises

  //     dispatch(addGptMovieResult({movieNames:listMovie, movieResults:TMBDresult}))
  //     // --->Storing all movies result in our store
  //   }


    const searchMovieTMBDData = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+addSearchText.current.value+"&include_adult=false&page=1", options)
      const json = await data.json();
      console.log(json.results);
      dispatch(addGptMovieResult({movieNames:json.results, movieResults:null}))
      return json.results;
    }

  return (
    <>
      <div class="row gap-3 col-5 mx-auto">
        <div class="input-group mb-3 gap-3">
            <input type="text" class="form-control" placeholder={language[langkey].gptPlaceholder} aria-label="Example text with button addon" aria-describedby="button-addon1" ref={addSearchText} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    searchMovieTMBDData();
                }
            }} />
            {/* <button class="btn btn-danger px-4 " type="button" id="button-addon1" onClick={()=>handleGptSearch()}>{language[langkey].search}</button> */}
            <button class="btn btn-danger px-4 " type="button" id="button-addon1" onClick={()=>searchMovieTMBDData()}>{language[langkey].search}</button>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
