export const initalState = {
    basket:[{image:"rahul"}],
    genre : [{dbs:"123"}]
}; 

const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'Card_Click': 
            return {
                // ...state,
                basket: [action.item],
                genre : [action.data]
            };
        default : 
            return state;
    }
}

export default reducer;