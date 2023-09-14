import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import movieReducer from "./movieSlice";
import gptReducer from './gptSlice'
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer : {
        cart:cartReducer,
        movie:movieReducer,
        gpt: gptReducer,
        config : configReducer
    }
})

export default appStore;