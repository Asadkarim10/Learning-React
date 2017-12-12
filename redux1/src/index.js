import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { myStore } from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider >
    , document.getElementById('root'));
registerServiceWorker();


