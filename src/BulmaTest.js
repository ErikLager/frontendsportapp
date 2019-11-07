import React from "react";
import "./BulmaTest.css"

export function BulmaTest(props) {
    const [open, setopen] = React.useState(false);

    let modalClasses = "modal";
    if (open === true) {
        modalClasses += "is-active";
    }
    return <section className="section">
        <div className="container">

            <div className="columns">
                <div className="column is-two-fifths has-background-warning">Watch the Games</div>
                <div className="column has-background-grey-dark	">Sign up</div>
                <div className="column has-background-black-bis	">Log in</div>
            </div>
        </div>
    </section >
    
}