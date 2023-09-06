import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name : 'cart',
    initialState : {
        items : [],
        basket:[],
        genre:[]
    },
    reducers : {
        addItems : (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            state.items.pop();
        },
        emptyCart : (state,action)=>{
            state.items.length = 0;
        },
        cardClick : (state,action)=>{
            state.basket.length = 0;
            state.basket.push(action.payload);
            
        },
        cardGenre : (state, action)=>{
            state.genre.length=0;
            state.genre.push(action.payload)
        }
    }
})

export const {addItems,removeItem,emptyCart,cardClick,cardGenre} = cartSlice.actions;
export default cartSlice.reducer;