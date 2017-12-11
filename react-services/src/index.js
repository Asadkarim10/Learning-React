import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(  <MuiThemeProvider><Routes />  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
