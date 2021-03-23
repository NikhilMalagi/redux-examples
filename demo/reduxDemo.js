const {createStore} = require("redux");

const initialState = { age : 25}
const myReducer = (state= initialState,action) => {
    const nState = {...state}

    if(action.type === "ADD"){
        nState.age += 1;
    } 

    return nState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type : "ADD"})
store.dispatch({type : "ADD"})
store.dispatch({type : "ADD"})


