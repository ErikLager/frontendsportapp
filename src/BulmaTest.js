import React from "react";
import "./BulmaTest.css"


export function BulmaTest(props) {
    const [authString, setAuthstring] = React.useState(undefined);
    const [open, setopen] = React.useState(false);
        function loginfunction() {
            console.log("Log In putton preseseed");
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            setAuthstring (`Basic ${btoa(username + ":" + password)}`);
            console.log(username + password + authString);
        }

    return <section className="section">
        <div className="container">
            <div className="columns">
                <a className="column is-two-quarter has-background-warning" href="https://www.vaxjolakers.se/lag/fe02-fe02mf1FN" target="_blank"><div >More info</div></a>
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
                                            Username:<br/><input type="username" id="username" name="Username" /><br/>
                                            Password:<br/><input type="password" id="password" name="Password" /><br/>
                                            <button className="login" onClick={loginfunction}>Log in</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                    </div>
                </div>
 
            </div> 
            <div className="table"> 
                <table> 
                    <thead><tr> 
                        <th>
                            Team
                </th>
                        <th>
                            Score
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lakers
                        </td>
                            <td>
                                20
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="rr" href="https://youtu.be/wDgQdr8ZkTw">Hyrule</a>
                            </td>
                            <td>
                                19
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="rr" href="https://youtu.be/MlyN3Grw-Zs">Leksand</a>
                            </td>
                            <td>
                                5
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section >
}