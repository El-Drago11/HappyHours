import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState:{
        TrendingNow_Store:localStorage.getItem('TrendingNow') ? JSON.parse(localStorage.getItem('TrendingNow')) : null,
        SciFi_Store:localStorage.getItem('SciFi') ? JSON.parse(localStorage.getItem('SciFi')) : null,
        Comedy_Store:localStorage.getItem('Comedy') ? JSON.parse(localStorage.getItem('Comedy')) : null,
        Horror_Store:localStorage.getItem('Horror') ? JSON.parse(localStorage.getItem('Horror')) : null,
        Romance_Store:localStorage.getItem('Romance') ? JSON.parse(localStorage.getItem('Romance')) : null,
        Documentry_Store:localStorage.getItem('Documentry') ? JSON.parse(localStorage.getItem('Documentry')) : null,
        trailerVedio :null
    },
    reducers:{
        dataTrending:(state,action) =>{
            state.trendingStore=action.payload;
        },
        dataScifi:(state,action) =>{
            state.scifiStore=action.payload;
        },
        dataComedy:(state,action) =>{
            state.comedyStore=action.payload;
        },
        dataHorror:(state,action) =>{
            state.horrorStore=action.payload;
        },
        dataRomance:(state,action) =>{
            state.romanceStore=action.payload;
        },
        dataDocumetry:(state,action) =>{
            state.documentryStore=action.payload;
        },
        addTrailerVedio :(state,action) =>{
            state.trailerVedio =action.payload;
        }
    }
})

export const {dataTrending,dataScifi,dataComedy,dataHorror,dataRomance,dataDocumetry,addTrailerVedio} = movieSlice.actions;
export default movieSlice.reducer;