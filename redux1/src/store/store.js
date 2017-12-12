import { createStore } from 'redux';
function Reducer(state = { counter: 0, arr: [1, 2] }, action) {
    let newState;
    switch (action.type) {
        case "INCREMENT":
        newState = Object.assign({}, state);
            newState.counter += action.payload;
            return Object.assign({}, state, newState);
        case "DECREMENT":
            newState = Object.assign({}, state);
            newState.counter -= action.payload;
            return Object.assign({}, state, newState);

        default:
            return state;
    }

}

export let myStore = createStore(Reducer);
myStore.subscribe(() => {
    console.log("this is in subscribe", myStore.getState());
})