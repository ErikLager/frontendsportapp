import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bulma/css/bulma.css";
import { BulmaTest } from './BulmaTest';
import GUIState from "./GUIState"


ReactDOM.render(<BulmaTest />, document.getElementById('root'));
// ReactDOM.render(<GUIState />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
