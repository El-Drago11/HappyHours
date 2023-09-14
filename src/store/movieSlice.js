import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState:{
        trendingStore:null,
        scifiStore:null,
        comedyStore:null,
        horrorStore:null,
        romanceStore:null,
        documentryStore:null,
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