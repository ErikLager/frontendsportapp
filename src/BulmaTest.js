import React from "react";
import "./BulmaTest.css"

export function dropdown() {
    console.log("Request LonIn");
    document.getElementById("dropDown").classList.toggle("show");
}

export function BulmaTest(props) {
    const [open, setopen] = React.useState(false);

    let modalClasses = "modal";
    if (open === true) {
        modalClasses += "is-active";
    }
    return <section className="section">
        <div className="container">

            <div className="columns">
                <a className="column is-two-quarter has-background-warning" href="https://www.vaxjolakers.se/lag/fe02-fe02mf1FN" target="_blank"><div >More info</div></a>
                <a className="column is-one-quarter has-background-grey-dark" ><div>Sign up</div></a>
                <a id="dropDown" className="column is-one-quarter has-background-black-bis"><div>Log in</div></a>
                <div className="dropdownContent">
                    Username:<input type="text" name="Username" /><br />
                    Password:<input type="password" name="Password" />
                </div>
            </div>
            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Hover me</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
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
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }