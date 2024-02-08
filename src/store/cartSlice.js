import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice ({
    name : 'cart',
    initialState : {
        items : localStorage.getItem("item")?JSON.parse(localStorage.getItem("item")):[],
        basket:localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[],
        genre:[],
        user:[],
    },
    reducers : {
        addItems : (state, action)=>{
            const cardId = action.payload.id;
            const cardIsPresent = state.items.findIndex((item)=>(item.id===cardId));
            if(cardIsPresent>=0){
                toast.error("Movie already added")
            }else{
                state.items.push(action.payload);
                localStorage.setItem("item",JSON.stringify(state.items))
                toast.success("Movie added")
            }
        },
        removeItem : (state, action)=>{
            const cardId = action.payload.id;
            const cardIndex = state.items.findIndex((item)=>(item.id===cardId));
            state.items.splice(cardIndex,1);
            localStorage.setItem("item",JSON.stringify(state.items))
            toast.success("Movie removed !!")
        },
        emptyCart : (state,action)=>{
            state.items.length = 0;
            localStorage.setItem("item",JSON.stringify(state.items))
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