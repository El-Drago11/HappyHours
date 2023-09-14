import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        movieResults : null,
        movieNames : null
    },
    reducers:{
        toogleGptSearchView:(state,action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state,action)=>{
            // Extracting values from  "action.payload"
            const{movieNames , movieResults} = action.payload;
            
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
    
})

export const{toogleGptSearchView,addGptMovieResult}  = gptSlice.actions;
export default gptSlice.reducer;