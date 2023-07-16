export const initalState = {
    basket:[{image:"rahul"}]
}; 

const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'Card_Click': 
            return {
                // ...state,
                basket: [action.item],
            };
        default : 
            return state;
    }
}

export default reducer;