import React from "react";
import "./sport.css"


export function Sport(props) {
    const [authString, setAuthstring] = React.useState(undefined);
    const [open, setopen] = React.useState(false);
    function loginfunction() {
        console.log("Log In putton preseseed");
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthstring(`Basic ${btoa(username + ":" + password)}`);
        console.log(username + password + authString);
    }
    let content;
    if(props.tData){
        const tableElements = props.tData.map(newData => <tr>
            <td>{newData.id}</td>
            <td>{newData.home_id}</td>
            <td>{newData.home_points}</td>
            <td>{newData.away_id}</td>
            <td>{newData.away_points}</td>
        </tr>)
        content = tableElements
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
        </div>
    </section >
}

{/* <tr>
                            <td>
                                {newData.id}
                            </td>
                            <td>
                                {newData.home_team}
                            </td>
                            <td>
                                {newData.home_score}
                            </td>
                            <td>
                                {newData.away_team}
                            </td>
    <td>
        {newData.away_score}
    </td>
</tr> */}