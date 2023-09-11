import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name : 'cart',
    initialState : {
        items : [],
        basket:[],
        genre:[],
        user:[],
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
        },
        addUser : (state,action)=>{
            state.user.push(action.payload)
        },
        removeUser : (state,action)=>{
            state.user.length =0;
        },
    }
})

export const {addItems,removeItem,emptyCart,cardClick,cardGenre,addUser,removeUser,userStatus} = cartSlice.actions;
export default cartSlice.reducer;