import React from "react";
import "./sport.css"
import Matcheditor from "./matcheditor";
import { postMatch, deleteMatch } from "./appdata";


export function Sport(props) {
    const [authString, setAuthstring] = React.useState(undefined);
    const [logincheck, setlogincheck] = React.useState(0);

/**
 * function checks username & password for login
 * at the moment it only fakes login 
 */
    function loginfunction() {
        console.log("Log In putton preseseed");
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthstring(`Basic ${btoa(username + ":" + password)}`);
        console.log(username+ " " + password + " " + authString);
        console.log("Authstring: "+authString);
        if (username === "Erik" && password === "Adm1n"){
        setlogincheck(1);
        } 
          

    }
    function logoutfunction(){
        setlogincheck(0);
    }
    /**
     * Read input fields and adds it to the database 
     */
    function add(){
        if (logincheck===1){
        console.log("Add");
        let home_id = document.getElementById("home_id").value;
        let away_id = document.getElementById("away_id").value;
        let home_score = document.getElementById("home_score").value;
        let away_score = document.getElementById("away_score").value;
        postMatch(home_id, away_id, Number(home_score), Number(away_score));
        }
        else {
            console.log("LOG IN")
        }
    }
    /**
     * functions chechs if the user is logged in and if it's true
     * adds the remove match function
     * function change() does the same
     */
    function remove(){
        if (logincheck === 1){
        console.log("Remove");
        let matchid = document.getElementById("matchid").value;
        deleteMatch(Number(matchid));
        }
        else {
            console.log("LOG IN")
        }
    }
    function change(){
        if (logincheck === 1){
        console.log("Change");
        }
        else{
            console.log("LOG IN")
        }
    }
    /**
     * This converts the data to a format the backend can read
     */
    let content;
    if(props.tData){
        const tableElements = props.tData.map(newData => <tr key={newData.id}>
            <td>{newData.id}</td>
            <td>{newData.home_id}</td>
            <td>{newData.home_points}</td>
            <td>{newData.away_id}</td>
            <td>{newData.away_points}</td>
        </tr>)
        content = tableElements
    }
    let addmatch;
    if (logincheck === 1){
        addmatch = <Matcheditor></Matcheditor>
    }

    return <section className="section">
        <div className="container">
            <div className="columns">
                <a className="column is-two-quarter has-background-warning" href="https://www.shl.se" target="_blank"><div >More info</div></a>
                <a className="column is-one-quarter has-background-grey-dark" ><div>Sign up</div></a>
                <div className="dropdown is-hoverable column is-one-quarter">
                    <div className="dropdown-trigger">
                        <div>Log in</div>
                        <span>
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <div className="dropdownContent">
                                        Username:<br /><input type="username" id="username" name="Username" /><br />
                                        Password:<br /><input type="password" id="password" name="Password" /><br />
                                        <button className="login" onClick={loginfunction}>Log in</button>
                                        <button className="logout" onClick={logoutfunction}>Log out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <h1>Match table:</h1>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                        <th className="id">
                            Id
                        </th>
                        <th className="ht">
                            Home Team
                        </th>
                        <th className="hs">
                            Home Score
                        </th>
                        <th className="at">
                            Away Team
                        </th>
                        <th className="as">
                            Away Score
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <button className="add" onClick={add}>Add a game</button>
            <button className="change" onClick={change}>Change the result of a game</button>
            <button className="remove" onClick={remove}>Remove the match</button>
            
            {addmatch}
        </div>
    </section >
    
}
