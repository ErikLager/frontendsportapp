import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bulma/css/bulma.css";
import { Sport } from './sport';
import {Fetchdata} from "./appdata";


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<GUIState />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function App(){
    const[tableData,settableData] = React.useState(undefined);
    // const authString = React.useRef(undefined);

    async function getTable(){
        const data = await Fetchdata("/sportApp/api/matches");
        settableData(data);
        
    }
    React.useEffect(()=> {getTable()}, []);

    return <Sport tData = {tableData}/>
}