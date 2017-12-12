import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Reducer(state = { counter: 0, arr: [1, 2] }, action) {
    let newState;
    switch (action.type) {
        case "INCREMENT":
            newState = Object.assign({}, state);
            newState.counter += 1;
            return Object.assign({}, state, newState);
        case "DECREMENT":
            newState = Object.assign({}, state);
            newState.counter -= 1;
            return Object.assign({}, state, newState);

        default:
            return state;
    }

}

let store = createStore(Reducer);
store.subscribe(() => {
    console.log("this is in subscribe", store.getState());
})

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();