import React from "react";
import "./BulmaTest.css"


export function BulmaTest(props) {
    const [authString, setAuthstring] = React.useState(undefined);
    const [open, setopen] = React.useState(false);
    function loginfunction() {
        console.log("Log In putton preseseed");
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthstring(`Basic ${btoa(username + ":" + password)}`);
        console.log(username + password + authString);
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
                        <th className="is-0">
                            Id
                        </th>
                        <th className="is-5">
                            Home Team
                        </th>
                        <th className="is-5">
                            Away Team
                        </th>
                        <th className="is-1">
                            Home Score
                        </th>
                        <th className="is-1">
                            Away Score
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                Lakers
                            </td>
                            <td>
                                Leksand
                            </td>
                            <td>
                                3
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                HV71
                            </td>
                            <td>
                                Oskarshamn
                            </td>
                            <td>
                                3
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section >
}